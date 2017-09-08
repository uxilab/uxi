var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'./src/app.js',
	],
	output: {
		path: __dirname,
		filename: 'app.js',
	},
	devtool: 'eval',
	devServer: {
		historyApiFallback: true,
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
			// material-ui requires will be searched in src folder, not in node_modules
			'cluedin-ui': path.resolve(__dirname, '../src'),
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-1,plugins[]=transform-object-rest-spread,presets[]=flow'],
				exclude: /node_modules/
			},
			{
				test: /\.jsx$/,
				loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-1,plugins[]=transform-object-rest-spread,presets[]=flow'],
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
			},
			{
				test: /\.txt$/,
				loader: 'raw-loader',
				include: path.resolve(__dirname, 'src/app/components/raw-code'),
			},
			{
				test: /\.md$/,
				loader: 'raw-loader',
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
		],
	},
};
