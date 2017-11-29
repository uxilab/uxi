const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:3001',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    './src/app.js',
  ],
  devtool: 'inline-source-map',
  output: {
    filename: 'app.js',
    path: __dirname,
  },
  devServer: {
    host: 'localhost',
    port: 3001,
    contentBase: './',
    historyApiFallback: {
      index: '/',
    },
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      // material-ui requires will be searched in src folder, not in node_modules
      uxi: path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    /* new HtmlWebpackPlugin({
      title: 'Development'
    }), */
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],
};
