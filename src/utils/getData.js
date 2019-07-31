import axios from 'axios';
let baseUrl = 'http://127.0.0.1:8889';
// import store from '@/store'


const getUserInfo = (token,username,password) => axios.get(baseUrl+'/api/getUserInfo',{params:{username,token,password}})

const getMockInfo = () => axios.get(baseUrl+'/api/mock')

export {
  getUserInfo,
  getMockInfo
}
