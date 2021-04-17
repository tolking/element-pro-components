<template>
  <el-radio-group
    :model-value="modelValue"
    class="pro-radio-button"
    @change="upData"
  >
    <el-radio-button
      v-for="item in data"
      :key="item.value"
      :name="item.name"
      :label="item.value"
      :disabled="item.disabled"
    >
      {{ item.label }}
    </el-radio-button>
  </el-radio-group>
</template>

<script setup name="ProRadioButton" lang="ts">
import { defineEmit, defineProps, toRefs } from 'vue'
import { ElRadioGroup, ElRadioButton } from 'element-plus'
import { useSelectData } from '../composables/index'
import type { UnknownObject } from '../types/index'

const props = defineProps<{
  modelValue: string | number | boolean | UnknownObject
  data: Record<string, boolean | string | number | UnknownObject>[]
  config?: {
    value?: string
    label?: string
    name?: string
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
