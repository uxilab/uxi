const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const babelConfig = require('./babel.config');


const cwd = process.cwd();
let hook;
let templateWebpackPath;

if (fs.existsSync(path.join(cwd, '/index.html'))) {
  templateWebpackPath = path.join(cwd, '/index.html');
} else {
  templateWebpackPath = path.join(cwd, '/node_modules/uxi-cli/index.html');
}

if (fs.existsSync(path.join(cwd, './uxi.dev.extend.js'))) {
  hook = require(path.join(cwd, './uxi.dev.extend.js'));
}


const devConfig = {
  mode: 'development',
  entry: [
    '@babel/polyfill',
    // 'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:3100',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    './src/index.js',
  ],
  devServer: {
    port: '3100',
    contentBase: './',
    hot: true,
    disableHostCheck: true,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  output: {
    path: path.join(cwd, 'build'),
    filename: 'app.js',
  },
  devtool: 'eval',
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
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: templateWebpackPath,
    }),
  ],
};

module.exports = hook ? hook(devConfig) : devConfig;
