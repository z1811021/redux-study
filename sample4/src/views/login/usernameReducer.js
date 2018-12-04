import { UPDATE_USERNAME } from './usernameActions.js';

export default function reducer1(state=[], action) { //设置初始化state
  switch (action.type) {
    case UPDATE_USERNAME:
      return action.payload.reducer1;
    default:
      return state;
  }
}