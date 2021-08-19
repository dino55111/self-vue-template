import * as service from './service'

const state = () => ({})

const getters = {}

const mutations = {
  SET_EXAMPLE (state, { data }) {
    state.data = data
  }
}

const actions = {
  async GET_EXAMPLE ({ dispatch, commit }) {
    const result = await dispatch('API', {
      reqContext: service.example()
    }, { root: true })

    commit('SET_EXAMPLE', result.data)
    return result
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
