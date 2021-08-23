const http = require('http');

const routes = require('./assiment1_routes');

const server = http.createServer(routes);

server.listen(3000);
