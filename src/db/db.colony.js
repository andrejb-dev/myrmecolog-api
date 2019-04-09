module.exports = function (db, log) {
    return {
        all: () => {
            log.log('select colonies');
            return db.any('Select * from colony');
        },
        add: colony => {
            log.log('insert colony', colony);
            return db.task(t => {
                return t.one({
                    text: 'INSERT INTO colony(keeper_id, name, description, established) VALUES($1,$2,$3,$4) RETURNING id',
                    values: [colony.keeper_id, colony.name, colony.decription, colony.established]
                }).then(ret => {
                    log.log('colony inserted, returned:', ret);
                    return t.one('SELECT * FROM colony WHERE id = $1', ret.id);
                });
            });
        },
        update: colony => {
            log.log('update colony', colony);
            return db.one('UPDATE colony SET description = $2, name = $3 WHERE id = $1 RETURNING *', [colony.id, colony.description, colony.name]);
        },
        delete: colonyId => {
            log.log('delete colony', colonyId);
            return db.none('DELETE FROM colony WHERE id = $1', colonyId);
        }
    };
}