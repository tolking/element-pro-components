<template>
  <header class="pro-header">
    <div class="header-slot">
      <span
        :class="{ 'is-active': collapse }"
        class="header-fold-btn"
        @click="toggleCollapse"
      >
        <span class="line" />
        <span class="line" />
        <span class="line" />
      </span>
      <slot name="left" />
    </div>
    <div class="header-slot">
      <slot name="right" />
    </div>
  </header>
</template>

<script lang="ts">
export default { name: 'ProLayoutHeader' }
</script>

<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps<{ collapse: boolean }>()
const emit = defineEmits(['toggle-collapse'])
const { collapse } = toRefs(props)

function toggleCollapse() {
  emit('toggle-collapse')
}
</script>
