import reducer from '../views/login/reducer.js'
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

const { reducer1, reducer2 } = reducer;

const allReducers = (history) => combineReducers({  //使用combineReducers 将两个reducer变为一个
  router: connectRouter(history), // 添加路由reducer通过传递history给connectRouter
  reducer1,
  reducer2
})

export default allReducers;