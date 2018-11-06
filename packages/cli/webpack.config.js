const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
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

if (fs.existsSync(path.resolve(cwd, './uxi.extend.js'))) {
    // Do something
  hook = require(path.resolve(cwd, './uxi.extend.js'));
}


if (!fs.existsSync(path.join(cwd, 'dist'))) {
  fs.mkdirSync(path.join(cwd, 'dist'));
}

fs.copyFileSync(templateWebpackPath, path.join(cwd, 'dist/index.html'));

const prodConfig = {
  mode: 'production',
  entry: [
    '@babel/polyfill',
    './src/index.js',
  ],
  output: {
    path: path.join(cwd, 'build'),
    filename: 'app.js',
  },
  devtool: 'nosources-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
    ],
    alias: {
      'uxi': require('path').resolve(__dirname, '../components/build'),
    },
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            ...babelConfig,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      NODE_ENV: JSON.stringify('production'),
      template: templateWebpackPath,
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

module.exports = hook ? hook(prodConfig) : prodConfig;
