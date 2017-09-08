var webpack = require('webpack');
var webPackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

module.exports = (PORT) => {

	config.entry.unshift(
		`webpack-dev-server/client?http://0.0.0.0:${PORT}/`,
		'webpack/hot/dev-server'
	);

	const front_server = new webPackDevServer(webpack(config), {
		stats: {
			colors: true
		},
		contentBase: './',
		devtool: 'eval',
		hot: true,
		historyApiFallback: {
			index: '/'
		},
	});

	front_server.listen(PORT, '0.0.0.0');
};
