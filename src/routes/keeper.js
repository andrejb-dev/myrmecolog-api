const controller = require('./controllers/keeper.controller');

module.exports.attachHandlers = attachHandlers;

function attachHandlers(router) {

    router.route('/keepers')
        .post(controller.createKeeper);

    router.route('/keepers/:login')
        .get(controller.readKeeper);
};