import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'; // 引入combineReducers
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import allReducers from './reducer.js';

function createStore(history) {

  const allStoreEnhancers = compose(
    applyMiddleware(routerMiddleware(history),thunk), //使用routerMiddleware(history)如果需要dispatch history给connectRouter
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ) // 其作用是把一系列的函数，组装生成一个新的函数，并且从后到前，后面参数的执行结果作为其前一个的参数。
  
  const store = createReduxStore(
    allReducers(history), //将history传递
    {reducer1:[1], reducer2:[2]}, // 替换为allReducers 并且设置初始state 作为第二个参数
    allStoreEnhancers
  );

  return {store};
};  
export default createStore;