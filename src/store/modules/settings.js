const defaultSettings = {
  title: '员工管理后台系统',
  fixedHeader: false,
  sidebarLogo: true,
  showSettings: true// 显示修改配置文件
}

const {fixedHeader, sidebarLogo, showSettings, title} = defaultSettings

const state = {
  showSettings: showSettings,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  title: title
}

const mutations = {
  CHANGE_SETTINGS(state,{key, value}){
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSettings({commit}, data){
    commit('CHANGE_SETTINGS', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
