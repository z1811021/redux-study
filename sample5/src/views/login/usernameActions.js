import axios from 'axios';
export const UPDATE_USERNAME = 'updateUsername';

export function updateReducer1action(username) {
  return {
    type: UPDATE_USERNAME,
    payload:{
      reducer1: username
    }
  }
}

// 添加一个方法返回一个函数
export function getRequest(username) {
  return dispatch => {
    axios({
      method: 'get',
      url: 'https://randomuser.me/api',
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}