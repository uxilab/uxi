module.exports = {
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ["es2015", "stage-1"],
				}
			},
			{
				test: /\.jsx$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ["es2015", "react", "stage-1"],
					plugins: ["transform-decorators-legacy", "transform-object-rest-spread"],
				},
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
