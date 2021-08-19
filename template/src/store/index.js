import Vue from 'vue'
import Vuex from 'vuex'
import userAgent from './userAgent'
import axios from '../plugins/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    API (context, { reqContext, payload }) {
      const request = Object.assign({}, reqContext.request, payload)
      return axios.request(request).then(reqContext.success).catch(reqContext.error)
    }
  },
  modules: {
    userAgent
  }
})
