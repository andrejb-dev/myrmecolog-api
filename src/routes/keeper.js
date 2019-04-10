const controller = require('./controllers/keeperController');

module.exports.attachHandlers = attachHandlers;

function attachHandlers(router) {

    router.route('/keepers')
        .post(controller.createKeeper);

    router.route('/keepers/:login')
        .get(controller.readKeeper);
};