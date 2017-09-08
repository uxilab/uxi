const appServer = require('./webpack_server');

const PORT = process.argv[2] || 3100;

console.log('Starting server - please have patience, as this might take up to 30 seconds.');

appServer(PORT);
