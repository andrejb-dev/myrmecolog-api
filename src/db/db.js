const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/postgres");
const log = require('../logging.handler')('PostgresDB');

db.proc('version')
    .then(data => {
        log.log('Connected: ', data);
    })
    .catch(error => {
        log.error(error);
    });

module.exports = {
    findById: (table, id) => {
        log.log('read ', table, id);
        return db.one('Select * from ' + table + ' where id = $1', id);
    },
    colonies: require('./db.colony')(db, log),
    keepers: require('./db.keeper')(db, log),
    transfers: require('./db.transfer')(db, log)
}