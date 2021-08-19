<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import useResize from './common/composables/useResize'
import useScroll from './common/composables/useScroll'
import useDetectBrowser from './common/composables/useDetectBrowser'

export default defineComponent({
  name: 'App',
  setup (props, context) {
    const { resizeHandler } = useResize(context)
    const { scrollHandler } = useScroll(context)
    const { detectBrowserHandler } = useDetectBrowser(context)

    scrollHandler()
    resizeHandler()
    detectBrowserHandler()
  }
})
</script>

<style lang="scss">
  @import '~@/assets/style/main';
</style>
