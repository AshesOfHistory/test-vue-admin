import axios from 'axios';
import store from '@/store'
import {getToken} from "./auth";

import {MessageBox, Message} from 'element-ui';


// 请求接口之前进行登录验证
const service = axios.create({
  baseURL: 'http://127.0.0.1:8889',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    // let token = window.storage.getItem('token')
    let token = store.getters.token
    if (token) {
      config.headers['X-Token'] = getToken()
    }
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200){
      Message({
        message: res.Error || error,
        type: 'error',
        duration: 5 * 1000
      })
      if (res.code == 10086) {
        MessageBox.confirm('您现在已登出，您可以按取消继续留在本页或者重新登录','确认登出',{
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log(error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
