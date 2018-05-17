const path = require('path');

module.exports = (config) => {
  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader',
    exclude: /node_modules/,
  });

  console.log('config.devServer.port', config.devServer.port)
  console.log('config.entry[1]', config.entry[1])
  config.devServer.port = 8989;
  config.entry[1].replace(/(:\d*)$/, ':8989');

  config.resolve.alias = {
    uxi: path.resolve(__dirname, '../src'),
    'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
    'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    'react': path.resolve(__dirname, 'node_modules/react'),
  };

  console.log('config.entry[1]', config.entry[1])
  console.log('config.devServer.port', config.devServer.port)

  return config;
};
