module.exports.attachHandlers = function (router) {
    var controller = require('./controllers/colonyController');

    router.route('/colonies')
        .get(controller.readColonies)
        .post(controller.addColony);

    router.route('/colonies/:colonyId')
        .get(controller.readColony)
        .put(controller.updateColony)
        .delete(controller.deleteColony);
};