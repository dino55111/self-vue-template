import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import storeModule from './plugins/storeModule'
import VueCompositionApi from '@vue/composition-api'
<%_ if (options.plugins.find(el => el === 'vue-meta')) { _%>
import VueMeta from 'vue-meta'
<%_ } _%>

Vue.config.productionTip = false
Vue.config.debug = process.env.NODE_ENV !== 'production'
Vue.config.devtools = process.env.NODE_ENV !== 'production'

Vue.use(storeModule)
Vue.use(VueCompositionApi)
<%_ if (options.plugins.find(el => el === 'vue-meta')) { _%>
Vue.use(VueMeta)
<%_ } _%>

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
