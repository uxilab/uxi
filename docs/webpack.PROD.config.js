const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
// const CompressionPlugin = require('compression-webpack-plugin');
const pgk = require('./package.json');


module.exports = {
  entry: [
    'babel-polyfill',
    './build/app.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `app.js`,
  },
  devtool: 'nosources-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.md'],
    alias: {
      // material-ui requires will be searched in src folder, not in node_modules
      uxi: path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: 'raw-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
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
      //   use: ['style', 'css?module'],
      //   exclude: /node_modules/,
      // },
    ],
  },
  plugins: [
    /*
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      NODE_ENV: JSON.stringify('production'),
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourceMap: true,
      compress: {
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
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // https://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0,
    }),
    */
  ],
};


/*
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
    // modules: ['uxi', 'node_modules'],
    alias: {
      // material-ui requires will be searched in src folder, not in node_modules
      uxi: path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   title: 'Development'
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],
};
*/
