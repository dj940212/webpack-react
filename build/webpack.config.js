const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		app: path.join(__dirname, '../client/app.js')
	},
	output: {
		filename: '[name]-[hash].js',
		path: path.join(__dirname, '../dist'),
		publicPath: ''
	},
	module: {
		rules: [
			{
				test: /.jsx$/,
				loader: 'babel-loader'
			},{
				test: /.js$/,
				exclude: [
					path.join(__dirname, '../node_modules')
				],
				loader: 'babel-loader'
			}			
		]
	},
	plugins: [
		new HTMLPlugin()
	]
}