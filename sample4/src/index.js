import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './views/login';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'; // 引入combineReducers
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer1, reducer3 } from './views/login/usernameReducer.js'
import reducer2 from './views/login/passwordReducer.js'


const allReducers = combineReducers({  //使用combineReducers 将两个reducer变为一个
  reducer1,
  reducer2,
  reducer3
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) // 其作用是把一系列的函数，组装生成一个新的函数，并且从后到前，后面参数的执行结果作为其前一个的参数。

const store = createStore(
  allReducers,
  {reducer1:[1], reducer2:[2], reducer3:[3]}, // 替换为allReducers 并且设置初始state 作为第二个参数
  allStoreEnhancers
);  


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')); // Provider使用context将store传给子组件

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
