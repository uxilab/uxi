const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const babelConfig = require('./babel.config');

const cwd = process.cwd();

module.exports = {
  mode: 'production',
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],
  output: {
    path: path.join(cwd, 'build'),
    filename: 'app.js',
  },
  devtool: 'nosources-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
         options: {
          babelrc: false,
            ...babelConfig,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      NODE_ENV: JSON.stringify('production'),
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // https://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack
    /*new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0,
    }),*/
  ],
};
