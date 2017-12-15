import React from 'react' //必须引入
import ReactDOM from 'react-dom'
import App from './App.jsx'

// 对比服务端和客户端代码， 如果有不同，用客户端代码代替服务端
ReactDOM.hydrate(<App />, document.getElementById('root'))