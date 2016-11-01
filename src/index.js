import 'normalize.css/normalize.css'

import './base.less'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import createStore from './store'
// 按需增删改 start
import RouteTest from './components/RouteTest'
import App from './containers/App'
import Backend from './containers/Backend/backend';
import LoginContainer from './containers/Login/loginContainer';
import LoginIndex from './components/Login/loginIndex';
import ArticleControl from './components/AtiticleControl/articleControl';
// 按需增删改 end

const store = createStore()
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={LoginContainer}>
        
      </Route>
      <Route path="/article" component={Backend}>
      </Route>
      <Route path="/app" component={App} />
      <Route path="/routetest" component={RouteTest} />
    </Router>
  </Provider>, document.getElementById('root'))
