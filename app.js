const server = require('./src/server').createServer();
const port = process.env.PORT || 8080;

server.listen(port, () => console.log(`Listening on port ${ port }`));