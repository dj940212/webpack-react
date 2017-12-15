const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development'

const config = {
	entry: {
		app: path.join(__dirname, '../client/app.js')
	},
	output: {
		filename: '[name]-[hash].js',
		path: path.join(__dirname, '../dist'),
		publicPath: '/public'
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
		new HTMLPlugin({
			template: path.join(__dirname, '../client/template.html')
		})
	]
}

// dev启动删除本地的dist目录，因为缓存中没有文件， 默认会访问本地的dist目录
if (isDev) {
	config.devServer = {
		host: '0.0.0.0',
		port: '8888',
		contentBase: path.join(__dirname, '../dist'),
		// hot: true,
		// 显示错误信息
		overlay: {
			errors: true
		},
		publicPath: '/public',
		// 404返回地址
		historyApiFallback: {
			index: '/public/index.html'
		}
	}
}

module.exports = config