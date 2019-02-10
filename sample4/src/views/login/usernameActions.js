import axios from 'axios';
export const UPDATE_USERNAME = 'updateUsername';
export const UPDATE_REQUESTNAME = 'updateRequestname';

export function updateReducer1action(username) {
  return {
    type: UPDATE_USERNAME,
    payload:{
      reducer1: username
    }
  }
}

// 添加一个方法返回一个函数
export function getRequest() {
  return dispatch => {
    axios({
      method: 'get',
      url: 'https://randomuser.me/api',
    })
    .then((res)=>{
      const action = {
        type: UPDATE_REQUESTNAME,
        payload:{
          reducer3: res.data.results[0].email
        }
      }
      //dispatch(action)
      return action
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}