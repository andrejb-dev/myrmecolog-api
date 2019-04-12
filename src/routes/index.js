module.exports.attachHandlers = function (server) {

    require('./keeper').attachHandlers(server);
    require('./colony').attachHandlers(server);
    require('./transfer').attachHandlers(server);
    require('./task').attachHandlers(server);
    require('./inspection').attachHandlers(server);
};