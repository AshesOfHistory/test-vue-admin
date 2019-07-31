const defaultSettings = {
  title: '员工管理后台系统',
  fixedHeader: false,
  sidebarLogo: false,
  showSettings: true
}

const {fixedHeader, sidebarLogo, showSettings} = defaultSettings

const state = {
  showSettings: showSettings,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo
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
