export const UPDATE_USERNAME = 'updateUsername';

export function updateReducer1action(username) {
  return {
    type: UPDATE_USERNAME,
    payload:{
      reducer1: username
    }
  }

}