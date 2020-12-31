<template>
  <component
    :is="is"
    :model-value="modelValue"
    v-bind="attrs"
    @update:modelValue="upData"
  />
</template>

<script setup lang="ts">
import { toRefs, defineEmit, defineProps, useContext } from 'vue'

const props = defineProps<{
  is: string
  modelValue: unknown
}>()
const { attrs } = useContext()
const emit = defineEmit(['update:modelValue'])
const { is, modelValue } = toRefs(props)

function upData(value: unknown) {
  emit('update:modelValue', value)
}
</script>
