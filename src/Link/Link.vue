<template>
  <component
    :is="type"
    v-bind="attr"
    class="pro-link"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export default { name: 'ProLink' }
</script>

<script setup lang="ts">
import { useLink } from '../composables/index'

const props = defineProps<{ to?: string }>()
const { type, attr } = useLink(props)
</script>
