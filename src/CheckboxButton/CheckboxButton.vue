<template>
  <el-checkbox-group
    v-model="modelValue"
    class="pro-checkbox-button"
  >
    <el-checkbox-button
      v-for="item in data"
      :key="item.value"
      :name="item.name"
      :label="item.value"
      :disabled="item.disabled"
    >
      {{ item.label }}
    </el-checkbox-button>
  </el-checkbox-group>
</template>

<script lang="ts">
export default { name: 'ProCheckboxButton' }
</script>

<script setup name="ProCheckboxButton" lang="ts">
import { ElCheckboxGroup, ElCheckboxButton } from 'element-plus'
import { useVModel, useSelectData } from '../composables/index'

const props = defineProps<{
  modelValue?: string[] | number[] | boolean[]
  data: Record<string, boolean | string | number>[]
  config?: {
    value?: string
    label?: string
    name?: string
    disabled?: string
  }
}>()
const emit = defineEmits(['update:modelValue'])
const modelValue = useVModel<string[] | number[] | boolean[]>(
  props,
  'modelValue',
  []
)
const data = useSelectData(props)
</script>
