const state = {//要设置的全局访问的state对象
  showHeader: true,//要设置的初始属性值
  changableNum: 5,
}

const getters = {//实时监听state值的变化(最新状态) eg this.$store.getters.isShow   配合computed生命周期使用
  isShowHeader(state){//承载变化的showFooter的值
    return state.showHeader
  },
  getChangeNum(state){
    return state.changableNum
  }
}

const mutations = {// 修改state状态值组件用法,方法名加参数,this.$store.commit(setNum,5)
  toogleHeaderShow(state){//自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.showHeader = !state.showHeader
  },
  setNum(state,num){// 第一个参数必须传state对象，第二个才是自定义参数
    state.changableNum = num
  }
}

const actions = {// 组件用法,方法名加参数,this.$store.cart.dispatch(asyncSetNum,5)  ?
  asyncToogleHeaderShow({commit,rootState,state}){//自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性,相当于临时提供了一个store上下文对象进行异步操作,context中含有rootState参数
    return new Promise((resolve,reject) => {
      commit('toogleHeaderShow')// commit中传递原store中的mutations方法名称
      console.log(rootState.collection.collections)
      resolve(state.changableNum)
    })
  },
  asyncSetNum(context,num){// asyncSetNum为外部组件调用方法名称
    context.commit('setNum',num)
  }
}




export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}
