var db = require('../../db/db');
const log = require('../../logging.handler')('InspectionController');

module.exports = {
    createInspection: function (req, res, next) {
        log.log('create inspection');
        db.transfers.add(req.body)
            .then((data) => {
                res.status(201)
                    .send(data);
            })
            .catch((error) => {
                log.error('Error occured', error);
                next(error);
            });
    }
}