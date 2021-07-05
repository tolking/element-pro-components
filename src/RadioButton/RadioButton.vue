<template>
  <el-radio-group
    v-model="modelValue"
    class="pro-radio-button"
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

<script lang="ts">
export default { name: 'ProRadioButton' }
</script>

<script setup lang="ts">
import { ElRadioGroup, ElRadioButton } from 'element-plus'
import { useVModel, useSelectData } from '../composables/index'

const props = defineProps<{
  modelValue?: string | number | boolean
  data: Record<string, boolean | string | number>[]
  config?: {
    value?: string
    label?: string
    name?: string
    disabled?: string
  }
}>()
const emit = defineEmits(['update:modelValue'])
const modelValue = useVModel<string | number | boolean>(props)
const data = useSelectData(props)
</script>
