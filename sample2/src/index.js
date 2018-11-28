import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux'; // 引入combineReducers

function reducer1(state=[], action) {   // 设置初始state
  return state;
}

function reducer2(state=[], action) {
  switch (action.type) {
    case 'updateReducer1':
      return action.payload.reducer2;
    default:
      return state;
  }
}

const allReducers = combineReducers({  //使用combineReducers 将两个reducer变为一个
  reducer1,
  reducer2
})

const updateReducer1action = {
  type: 'updateReducer1',
  payload: {
    reducer2: 11
  }
}
const store = createStore(
  allReducers,
  {reducer1:[1], reducer2:[2]}, // 替换为allReducers 并且设置初始state 作为第二个参数
  window.devToolsExtension ? window.devToolsExtension() : f => f
);  
console.log(store.getState())
store.dispatch(updateReducer1action);
console.log(store.getState())
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
