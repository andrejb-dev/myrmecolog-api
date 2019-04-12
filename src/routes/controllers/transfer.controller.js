var db = require('../../db/db');
const log = require('../../logging.handler')('TranferController');

module.exports = {
    createTranfer: function (req, res, next) {
        log.log('create transfer');
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