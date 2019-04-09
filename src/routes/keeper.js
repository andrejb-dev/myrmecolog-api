const controller = require('./controllers/keeperController');

module.exports.attachHandlers = attachHandlers;

function attachHandlers(router) {

    router.route('/keepers')
        .get(controller.readKeepers)
        .post(controller.createKeeper);

    // get requests
    router.route('/keepers/:login')
        .get(controller.readKeeper);

    // put requests
    //router.put('/api/supporters/:email/password', changeSupportersPassword);

};