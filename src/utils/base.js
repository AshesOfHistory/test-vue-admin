import Cookies from 'js-cookie'

const tokenKey = 'test-login-token'
const getToken = () =>{
  return Cookies.get(tokenKey)
}
const setToken = (token) => {
  return Cookies.set(tokenKey,token)
}
const removeToken = () => {
  return Cookies.remove(tokenKey)
}

