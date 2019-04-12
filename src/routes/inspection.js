const controller = require('./controllers/inspection.controller');

module.exports.attachHandlers = attachHandlers;

function attachHandlers(router) {

    router.route('/inspections')
        .post(controller.createInspection);
};