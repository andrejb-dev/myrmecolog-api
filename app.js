var server = require('./src/server').createServer(),
    configuration = require('./bin/configuration');

configuration.applyConfiguration(server);

server.listen(configuration.port, configuration.ipaddress, function () {
    console.log('%s: Node server started on %s:%d ...',
        Date(Date.now()), configuration.ipaddress, configuration.port);
    console.log('%s: Accepting incoming requests: %s', Date(Date.now()), server.settings.env);
});