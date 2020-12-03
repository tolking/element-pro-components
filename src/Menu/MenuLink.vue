<template>
  <component :is="type">
    <i v-if="item.meta.icon" :class="item.meta.icon" />
    <span v-if="item.meta.title">{{ item.meta.title }}</span>
  </component>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue"
import { checkUrl } from '../utils/validate'

const { item } = defineProps<{
  item: any
}>()

const type = computed(() => checkUrl(item.path)  ? 'a' : 'router-link')
</script>
