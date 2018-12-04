import { UPDATE_USERNAME, UPDATE_PASSWORD } from './action.js';

function reducer1(state=[], action) { //设置初始化state
  switch (action.type) {
    case UPDATE_USERNAME:
      return action.payload.reducer1;
    default:
      return state;
  }
}

function reducer2(state=[], action) {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return action.payload.reducer2;
    default:
      return state;
  }
}
export default {reducer1, reducer2}