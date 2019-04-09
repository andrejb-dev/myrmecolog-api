const db = require('../../db/db');
const log = require('../../logging.handler')('ColonyController');
const TABLE_NAME = 'colony';

module.exports = {
    readColonies: function (req, res, next) {
        log.log('getting colonies');
        db.colonies.all()
            .then((data) => {
                log.log('returning', data);
                res.send(data);
            })
            .catch((error) => {
                log.error('Error occured', error);
                next(error);
            });
    },
    addColony: function (req, res, next) {
        db.colonies.add(req.body)
            .then(data => {
                res.status(201)
                    .send(data);
            }).catch(error => {
                log.error('Error occured', error);
                next(error);
            });
    },
    updateColony: function (req, res, next) {
        log.log('updating colony [%s]', req.body.id);
        db.colonies.update(req.body)
            .then(data => {
                log.log('colony updated');
                res.send(data);
            })
            .catch(error => {
                log.error(error);
                next(error);
            })
    },
    deleteColony: function (req, res, next) {
        log.log('deleting colony: ', req.params.colonyId);
        db.colonies.delete(req.params.colonyId)
            .then(data => {
                log.log('colony [%s] deleted', req.params.colonyId);
                res.status(204);
            })
            .catch(error => {
                log.error(error);
                next(error);
            });
    }
}