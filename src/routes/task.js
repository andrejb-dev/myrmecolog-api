const controller = require('./controllers/task.controller');

module.exports.attachHandlers = attachHandlers;

function attachHandlers(router) {

    router.route('/tasks')
        .post(controller.createTask);
};