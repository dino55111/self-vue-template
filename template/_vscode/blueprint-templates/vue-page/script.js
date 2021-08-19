import {
  defineComponent,
  onBeforeUnmount
} from '@vue/composition-api'
import StoreModule from './store'

export default defineComponent({
  name: '{{ pascalCase name }}',
  <%_ if (options.plugins.find(el => el === 'vue-meta')) { _%>
  metaInfo () {
    return {
      title: 'title'
    }
  },
  <%_ } _%>
  setup (props, context) {
    const { $store, $registerModule, $unregisterModule } = context.root

    $registerModule($store, { '{{ snakeCase name }}': StoreModule })

    onBeforeUnmount(() => $unregisterModule($store, ['{{ snakeCase name }}']))
  }
})