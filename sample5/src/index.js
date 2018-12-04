import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './views/login';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'; // 引入combineReducers
import { Provider } from 'react-redux';
import { connectRouter } from 'connected-react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router'
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import reducer1 from './views/login/usernameReducer.js'
import reducer2 from './views/login/passwordReducer.js'


const allReducers = (history) => combineReducers({  //使用combineReducers 将两个reducer变为一个
  router: connectRouter(history), // 添加路由reducer通过传递history给connectRouter
  reducer1,
  reducer2
})

const history = createBrowserHistory();

const allStoreEnhancers = compose(
  applyMiddleware(routerMiddleware(history),thunk), //使用routerMiddleware(history)如果需要dispatch history给connectRouter
  window.devToolsExtension ? window.devToolsExtension() : f => f
) // 其作用是把一系列的函数，组装生成一个新的函数，并且从后到前，后面参数的执行结果作为其前一个的参数。

const store = createStore(
  allReducers(history), //将history传递
  {reducer1:[1], reducer2:[2]}, // 替换为allReducers 并且设置初始state 作为第二个参数
  allStoreEnhancers
);  


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => (<App />)} />
      </Switch>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')); // Provider使用context将store传给子组件

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
