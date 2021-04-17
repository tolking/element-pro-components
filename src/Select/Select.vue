<template>
  <el-select
    :model-value="modelValue"
    class="pro-select"
    @change="upData"
  >
    <el-option
      v-for="item in data"
      :key="item.value"
      :value="item.value"
      :label="item.label"
      :disabled="item.disabled"
    />
  </el-select>
</template>

<script setup name="ProSelect" lang="ts">
import { defineEmit, defineProps, toRefs } from 'vue'
import { ElSelect, ElOption } from 'element-plus'
import { useSelectData } from '../composables/index'
import type { UnknownObject } from '../types/index'

const props = defineProps<{
  modelValue?:
    | string
    | number
    | boolean
    | Record<string, unknown>
    | string[]
    | number[]
    | boolean[]
    | UnknownObject[]
  data: Record<string, boolean | string | number | UnknownObject>[]
  config?: {
    value?: string
    label?: string
    disabled?: string
  }
}>()
const emit = defineEmit(['update:modelValue'])
const { modelValue } = toRefs(props)
const data = useSelectData(props)

function upData(value: unknown) {
  emit('update:modelValue', value)
}
</script>
