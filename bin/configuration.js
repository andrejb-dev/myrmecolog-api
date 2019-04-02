var express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path"),
    application_root = path.resolve(".");

module.exports.applyConfiguration = function (server) {
    console.log('Setting basic startup configuration...');

    var publicPath = path.join(application_root, "public");

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use('/', express.static(publicPath));

    server.get("/", function (req, res) {
        res.render("index", { title: 'title of site' });
    });
}

//  Set the environment variables
module.exports.port = 8080;
module.exports.ipaddress = "127.0.0.1";