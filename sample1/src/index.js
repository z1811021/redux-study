import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'; // 从redux包中导入createStore方法

const store = createStore(reducer); //使用reducer纯函数作为第一个参数创建store

// 纯函数方法 请不要在reducer中修改传入参数，执行有副作用的操作，调用非纯函数
// 在 reducer中描述了action如何把state转换成下一个state
function reducer(state, action) {
  if(action.type === 'changeState') {
    return action.payload.newState;
  }
  return 'State';
}

console.log(store.getState()) // 使用store.getState()获取当前state

// action 普通对象
const action = {
  type: 'changeState',
  payload: {
    newState: 'NewState'
  }
}

store.dispatch(action); // dispatch 将action发给store
console.log(store.getState()) // 再次获取看是否发生变化
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
