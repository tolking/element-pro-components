<template>
  <el-radio-group
    :model-value="modelValue"
    class="pro-radio"
    @change="upData"
  >
    <el-radio
      v-for="item in data"
      :key="item.value"
      :name="item.name"
      :label="item.label"
      :disabled="item.disabled"
    >
      {{ item.label }}
    </el-radio>
  </el-radio-group>
</template>

<script setup name="ProRadio" lang="ts">
import { defineEmit, defineProps, toRefs } from 'vue'
import { ElRadioGroup, ElRadio } from 'element-plus'
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
