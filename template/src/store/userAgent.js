const state = () => ({
  window: {
    width: 0,
    height: 0
  },
  client: {
    width: 0,
    height: 0
  },
  scroll: {
    top: 0,
    left: 0
  },
  userAgentInfo: {}
})

const getters = {
  windowWidth (state) {
    return state.window.width
  },
  windowHeight (state) {
    return state.window.height
  },
  clientWidth (state) {
    return state.client.width
  },
  clientHeight (state) {
    return state.client.height
  },
  scrollTop (state) {
    return state.scroll.top
  },
  scrollLeft (state) {
    return state.scroll.left
  },
  orientation: state => state.window.width > state.window.height ? 'landscape' : 'portrait',
  isWebview: state => {
    const { name } = state.userAgentInfo
    return name === 'chromium-webview' || name === 'ios-webview'
  },
  isMobile: state => {
    const { os } = state.userAgentInfo
    return (os === 'Android OS' || os === 'iOS')
  }
}

const mutations = {
  SET_SIZE (state, { width = 0, height = 0, type = 'window' }) {
    state[type].width = width
    state[type].height = height
  },
  SET_SCROLL (state, { top = 0, left = 0 }) {
    state.scroll.top = top
    state.scroll.left = left
  },
  SET_USERAGENT_INFO (state, userAgentInfo) {
    state.userAgentInfo = userAgentInfo
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
