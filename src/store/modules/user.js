import Cookies from 'js-cookie'
import {login,logout,getInfo} from '@/api/user'
import {getToken,setToken,removeToken} from "../../utils/auth";
import {resetRouter} from '@/router'


const state = {
  token: '',
  avatar: '',
  name: ''
}

const mutations = {
  SET_TOKEN(state, token){
    state.token = token
  },
  SET_NAME(state, name){
    state.name = name
  },
  SET_AVATAR(state, avatar){
    state.avatar = avatar
  }
}

const actions = {// this.$store.dispatch('user/login',userInfo)
  login(context, userInfo){
    let {username, password} = userInfo
    return new Promise((resolve, reject) => {
      login({username:username.trim(), password}).then(response => {
        const {data} = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
    // context.commit('')
  },
  logout(context){
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        context.commit('SET_TOKEN', '')
        removeToken()
        resetRouter()
        resolve()
      })
    })
  },
  getInfo(context){
    return new Promise((resolve,reject) => {
      getInfo(state.token).then((response) => {
        const {data} = response
        if (!data) {
          reject('验证失败，请重新登录')
        }
        const {name, avatar} = data
        context.commit('SET_NAME', name)
        context.commit('SET_AVATAR', avatar)
        resolve(data)
      })
    }).then(error => {
      reject(error)
    })
  },
  resetToken({commit}){
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  state,mutations,actions
}
