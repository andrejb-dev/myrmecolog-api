var db = require('../../db/db');
const log = require('../../logging.handler')('TaskController');

module.exports = {
    createTask: function (req, res, next) {
        log.log('create task');
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