const path = require('path');

/* eslint-disable no-param-reassign */
module.exports = (config) => {

  config.devServer.port = 8888;
  config.entry[1].replace(/(:\d*)$/, ':8888');

  return config;
};
