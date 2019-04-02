module.exports.attachHandlers = function (server) {

    require('./user').attachHandlers(server);
    require('./colony').attachHandlers(server);
};