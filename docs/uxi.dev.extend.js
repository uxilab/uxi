const path = require('path');

/* eslint-disable no-param-reassign */
module.exports = (config) => {
  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader',
    exclude: /node_modules/,
  });

  config.devServer.port = 8989;
  config.entry[1].replace(/(:\d*)$/, ':8989');

  config.resolve.alias = {
    uxi: path.resolve(__dirname, '../src'),
    'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
    'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    react: path.resolve(__dirname, 'node_modules/react'),
  };


  return config;
};
