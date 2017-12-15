const express = require('express')
const fs = require('fs')
const path = require('path')
const ReactSSR = require('react-dom/server')
const serverEntry = require('../dist/server-entry').default

// 读取
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')

const app = express()

// 静态资源
app.use('/public', express.static(path.join(__dirname, '../dist')))

// 返回页面
app.get('*', function(req, res) {
	const appString = ReactSSR.renderToString(serverEntry)
	template.replace('<app></app>', appString)
	res.send(template.replace('<app></app>', appString))
})

app.listen(3333, function() {
	console.log('server is listening on 3333')
})