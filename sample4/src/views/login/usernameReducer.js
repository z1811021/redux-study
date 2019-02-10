import { UPDATE_USERNAME, UPDATE_REQUESTNAME } from './usernameActions.js';

export function reducer1(state=[], action) { //设置初始化state
  switch (action.type) {
    case UPDATE_USERNAME:
      return action.payload.reducer1;
    default:
      return state;
  }
}


export function reducer3(state=[], action) { //设置初始化state
  switch (action.type) {
    case UPDATE_REQUESTNAME:
      return action.payload.reducer3;
    default:
      return state;
  }
}