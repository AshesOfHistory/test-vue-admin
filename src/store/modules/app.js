import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,// 默认是true
    withoutAnimation: false,
    currentIndexPath: '1',
    openedIndexArr: []
  },
  device: 'desktop',// desktop mobile
  menuitems: []
}

const mutations = {
  TOOGLE_SIDEBAR(state){
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {// 将状态存储到cookie中，默认展开或关闭
      Cookies.set('sidebarStatus',1)
    } else {
      Cookies.set('sidebarStatus',0)
    }
  },
  CLOSE_SIDEBAR(state, withoutAnimation){
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOOGLE_DEVICE(state,device){// 感觉是set比较好
    state.device = device
  },
  SET_PATH(state, path){
    state.currentIndexPath = path
  },
  SET_MENUS(state, menuitems){
    state.menuitems = menuitems
  }
}

const actions = {
  toogleSideBar(context){
    context.commit('TOOGLE_SIDEBAR')
  },
  closeSideBar(context, {withoutAnimation}){
    context.commit('CLOSE_SIDEBAR',withoutAnimation)
  },
  toogleDevice(context, device){
    context.commit('TOOGLE_DEVICE', device)
  },
  setPath(context, path){
    context.commit('SET_PATH', path)
  },
  getMenus(context, menuitems){
    return new Promise((resolve,reject) => {
      context.commit('SET_MENUS', menuitems)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
