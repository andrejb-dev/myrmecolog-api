module.exports.attachHandlers = function (router) {
    var controller = require('./controllers/colonyController');

    router.route('/colony')
        .get(controller.readColonies)
        .post(controller.addColony);

    router.route('/colony/:colonyId')
        .get(controller.readColony)
        .put(controller.updateColony)
        .delete(controller.deleteColony);
};