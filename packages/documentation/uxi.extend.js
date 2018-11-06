const path = require('path');

module.exports = (config) => {
  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader',
    exclude: /node_modules/,
  });

  config.resolve.alias = {
    'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
    'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    'react': path.resolve(__dirname, 'node_modules/react'),
  };

  return config;
};
