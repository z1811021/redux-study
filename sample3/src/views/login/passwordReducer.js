import { UPDATE_PASSWORD } from './passwordActions.js';

export default function reducer2(state=[], action) {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return action.payload.reducer2;
    default:
      return state;
  }
}