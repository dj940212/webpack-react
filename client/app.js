import React from 'react' //必须引入
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App.jsx'

// 对比服务端和客户端代码， 如果有不同，用客户端代码代替服务端
// ReactDOM.hydrate(<App />, document.getElementById('root'))

const root = document.getElementById('root')
const render = Component => {
	ReactDOM.hydrate(
		<AppContainer>
			<Component/>
		</AppContainer>,
		root
	)
}

render(App)

// 热模块更新
if (module.hot) {
	module.hot.accept('./App.jsx', () => {
		const NextApp = require('./App.jsx').default
		// ReactDOM.hydrate(<NextApp />, document.getElementById('root'))
		render(NextApp)
	})
}