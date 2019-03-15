const path = require('path');

module.exports = (config) => {
  console.log('using custom config');
  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader',
    exclude: /node_modules/,
  });

  config.resolve.alias = {
    uxi: path.resolve(__dirname, '../src'),
    'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
    'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    react: path.resolve(__dirname, 'node_modules/react'),
  };

  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.worker\.js$/,
      use: {
        loader: 'worker-loader',
        options: { inline: true, fallback: false },
      },
    },
  ];

  return config;
};
