<template>
  <el-select
    :model-value="modelValue"
    :clearable="clearable"
    popper-class="pro-tree-select-popper"
    class="pro-tree-select"
    @clear="clear"
  >
    <el-option
      :value="value"
      :label="label"
      class="pro-tree-select-options"
    >
      <el-tree
        v-bind="attrs"
        :data="data"
        node-key="value"
        class="pro-tree-select-tree"
        @node-click="changeValue"
      />
    </el-option>
  </el-select>
</template>

<script setup name="TreeSelect" lang="ts">
import { defineEmit, defineProps, ref, toRefs } from 'vue'
import { ElSelect, ElOption, ElTree } from 'element-plus'
import { useAttrs, useSelectData } from '../composables'
import type { PropType } from 'vue'
import type {
  UnknownFunction,
  UnknownObject,
  SelectDataItem,
  SelectConfig,
} from '../types'

// const props = defineProps<{
//   modelValue?:
//     | string
//     | number
//     | boolean
//     | Record<string, unknown>
//     | Array<string | number | boolean | Record<string, unknown>>
//   data: Record<string, boolean | string | number | UnknownObject>[]
//   config?: {
//     value?: string
//     label?: string
//     disabled?: string
//     children?: string
//     isLeaf?: boolean | UnknownFunction
//   }
//   clearable?: boolean
// }>()
const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
  },
  data: {
    type: Array as PropType<
      Record<string, boolean | string | number | UnknownObject>[]
    >,
    default: () => [],
  },
  config: {
    type: Object as PropType<SelectConfig>,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmit(['update:modelValue'])
const attrs = useAttrs()
const { modelValue, clearable } = toRefs(props)
const data = useSelectData(props)
const value = ref('')
const label = ref('')

function changeValue(e: SelectDataItem) {
  console.log(e)
  value.value = e.value
  label.value = e.label
  emit('update:modelValue', e.value)
}

function clear() {
  value.value = ''
  label.value = ''
  emit('update:modelValue', value.value)
}
</script>
