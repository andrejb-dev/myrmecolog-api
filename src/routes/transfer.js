const controller = require('./controllers/transfer.controller');

module.exports.attachHandlers = attachHandlers;

function attachHandlers(router) {

    router.route('/tranfers')
        .post(controller.createTranfer);
};