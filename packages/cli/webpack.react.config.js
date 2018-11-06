const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
// const pgk = require('./package.json');
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
            presets: ['env', 'react'],
            // plugins: [require('@babel/plugin-proposal-object-rest-spread')],
            plugins: ['transform-object-rest-spread'],
          },
        },
      },
      // {
      //   test: /\.jsx?$/,
      //   use: [
      //     'babel-loader',
      //   ],
      //   exclude: /node_modules/,
      // },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      NODE_ENV: JSON.stringify('production'),
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    /*
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourceMap: true,
      compress: {
        drop_console: false, // keep logs for debug !!! remove me!
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi], // skip pre-minified libs
    }),
    */
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // https://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0,
    }),
  ],
};
