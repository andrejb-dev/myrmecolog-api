var server = require('./src/server').createServer(),
    configuration = require('./bin/configuration');

configuration.applyConfiguration(server);

server.listen(configuration.port, () => console.log(`Listening on ${ configuration.port }`));