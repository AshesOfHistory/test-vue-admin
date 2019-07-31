import Vuex from 'vuex'
import Vue from 'vue'
import cart from './modules/cart'
import collection from './modules/collection'
import app from './modules/app'
import user from './modules/user'
import settings from './modules/settings'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart,
    collection,
    app,
    user,
    settings
  }
})

export default store
