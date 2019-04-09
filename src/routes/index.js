module.exports.attachHandlers = function (server) {

    require('./keeper').attachHandlers(server);
    require('./colony').attachHandlers(server);
};