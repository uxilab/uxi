const path = require('path');

module.exports = (config) => {
  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader',
    exclude: /node_modules/,
  });

  config.resolve.alias = {
    'uxi': path.resolve(__dirname, '../components/build'),
  };

  return config;
};
