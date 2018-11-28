import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './views/login';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux'; // 引入combineReducers
import { Provider } from 'react-redux';
import reducer1 from './views/login/usernameReducer.js'
import reducer2 from './views/login/passwordReducer.js'


const allReducers = combineReducers({  //使用combineReducers 将两个reducer变为一个
  reducer1,
  reducer2
})

const store = createStore(
  allReducers,
  {reducer1:[1], reducer2:[2]}, // 替换为allReducers 并且设置初始state 作为第二个参数
  window.devToolsExtension ? window.devToolsExtension() : f => f
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
