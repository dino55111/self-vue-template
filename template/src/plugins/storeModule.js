import { getCurrentInstance } from '@vue/composition-api'

const currentStoreNameMap = {}

const registerModule = function (store, modules) {
  const uid = getCurrentInstance().uid
  for (const name in modules) {
    const isRegistered = store._modules.root._children[name] !== undefined

    // 不同路徑，使用到同組件，且不想共享 store 的情境，強制先移除 store
    if (isRegistered) store.unregisterModule(name)

    const preserveState = store.state[name] !== undefined
    store.registerModule(name, modules[name], { preserveState })
    currentStoreNameMap[name] = uid
  }
}

const unregisterModule = function (store, modules) {
  const uid = getCurrentInstance().uid
  for (const name of modules) {
    const isRegistered = store._modules.root._children[name] !== undefined
    // 確保預移除的 store name 跟呼叫 unregisterModule 是相同一個
    const sameVueInstance = currentStoreNameMap[name] === uid

    if (isRegistered && sameVueInstance) {
      store.unregisterModule(name)
      delete currentStoreNameMap[name]
    }
  }
}

export default {
  install (Vue, options) {
    Vue.prototype.$registerModule = registerModule
    Vue.prototype.$unregisterModule = unregisterModule
  }
}