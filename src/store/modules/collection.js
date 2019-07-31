const state = {
  collections: []
}

const getters = {
  getCollections(state){
    return state.collection
  }
}

const mutations = {//组件调用 this.$store.commit('collection/addCollection', goodItem)
  addCollection(state, goodItem){
    state.collections.push(goodItem)
  }
}

const actions = {//组件调用 this.$store.dispatch('collection/asyncAddcollection', goodItem)
  asyncAddCollection(context, goodItem) {
    context.commit('addCollection', goodItem)
  }
}

export default {
  namespaced:true,//用于在全局引用此文里的方法时标识这一个方法的文件名
  state,
  getters,
  mutations,
  actions
}
