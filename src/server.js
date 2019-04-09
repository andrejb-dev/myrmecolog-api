const express = require("express"),
    routes = require("./routes");

module.exports.createServer = createServer;

function createServer() {

    var server = express();

    console.log('Setting basic startup configuration...');
    // server.use(cors);
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    // attach router handlers
    console.log('Setting up routes...');
    routes.attachHandlers(server);

    // setup general error handler
    server.use(function (err, req, res, next) {
        if(!err.logged) {
            console.error('Express default error handler:', err);
        }
        res.status(500).send('Something broke!')
    });
    // setup 404 error handler
    server.use(function (req, res, next) {
        res.status(404).send({ error: 'Not found' });
    });

    return server;
};