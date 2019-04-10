var db = require('../../db/db');
const log = require('../../logging.handler')('KeeperController');

module.exports = {
    createKeeper: function (req, res, next) {
        log.log('create keeper');
        db.keepers.add(req.body)
            .then(data => {
                res.status(201)
                    .send(data);
            })
            .catch((error) => {
                log.error('Error occured', error);
                next(error);
            });
    },
    readKeeper: function (req, res, next) {
        log.log('read keeper');
        db.keepers.one(req.params.login)
            .then(keeper => {
                if (!keeper) {
                    next();
                    return;
                }
                log.log('returning', keeper);
                res.send(keeper);
            })
            .catch((error) => {
                log.error(error);
                next(error);
            });
    }
}