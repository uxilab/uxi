const path = require('path');

/* eslint-disable no-param-reassign */
module.exports = (config) => {
  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader',
    exclude: /node_modules/,
  });

  config.devServer.port = 8997;
  config.entry[1].replace(/(:\d*)$/, ':8997');

  config.resolve.alias = {
    'uxi': path.resolve(__dirname, '../components/build'),
  };

  return config;
};
