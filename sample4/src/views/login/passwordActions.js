export const UPDATE_PASSWORD = 'updatePassword'  //使用const让UPDATE_PASSWORD仅用于action

export function updateReducer2action (password) {
  return {
    type: UPDATE_PASSWORD,
    payload: {
      reducer2: password
    }
  }
}