import {
  defineComponent,
  onBeforeUnmount
} from '@vue/composition-api'
import StoreModule from './store'

export default defineComponent({
  name: 'Index',
  <%_ if (options.plugins.find(el => el === 'vue-meta')) { _%>
  metaInfo () {
    return {
      title: 'title'
    }
  },
  <%_ } _%>
  setup (props, context) {
    const { $store, $registerModule, $unregisterModule } = context.root

    $registerModule($store, { index: StoreModule })

    onBeforeUnmount(() => $unregisterModule($store, ['index']))
  }
})