<template>
  <div class="{{ pascalCase name }}">
    {{ pascalCase name }}
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: '{{ pascalCase name }}'
})
</script>

<style lang="scss">
.{{ pascalCase name }} {
}

// xl | lg | md | sm
// @screen xl {}
</style>
