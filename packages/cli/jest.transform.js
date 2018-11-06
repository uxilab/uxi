const babelOptions = {
  presets: [
    'env',
    'react',
    'stage-0',
  ],
  plugins: ['transform-object-rest-spread', 'transform-class-properties'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
