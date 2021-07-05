<template>
  <el-radio-group
    v-model="modelValue"
    class="pro-radio"
  >
    <el-radio
      v-for="item in data"
      :key="item.value"
      :name="item.name"
      :label="item.value"
      :disabled="item.disabled"
    >
      {{ item.label }}
    </el-radio>
  </el-radio-group>
</template>

<script lang="ts">
export default { name: 'ProRadio' }
</script>

<script setup lang="ts">
import { ElRadioGroup, ElRadio } from 'element-plus'
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
