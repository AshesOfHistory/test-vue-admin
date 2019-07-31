const getters = {// 能够获取到其他模块的state
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  hasLogo: state => state.settings.sidebarLogo,
  title: state => state.settings.title
}
export default getters
