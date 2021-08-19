<template>
  <div class="IndexComponent">
    This is a component.
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'IndexComponent',
})
</script>

<style lang="scss">
.IndexComponent {
}

// xl | lg | md | sm
// @screen xl {}
</style>
