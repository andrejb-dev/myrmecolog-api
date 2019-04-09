const controller = require('./controllers/colonyController');

module.exports.attachHandlers = attachHandlers;

function attachHandlers(router) {

    router.route('/colonies')
        .get(controller.readColonies)
        .post(controller.addColony);

    router.route('/colonies/:colonyId')
        // .get(controller.readColony)
        .put(controller.updateColony)
        .delete(controller.deleteColony);
};