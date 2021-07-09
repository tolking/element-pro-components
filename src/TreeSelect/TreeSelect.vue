<template>
  <el-select
    :model-value="modelValue"
    :clearable="clearable"
    :multiple="multiple"
    :filter-method="tree.filter"
    popper-class="pro-tree-select-popper"
    class="pro-tree-select"
    @visible-change="tree.filter('')"
    @remove-tag="remove"
    @clear="clear"
  >
    <el-option
      :value="value"
      :label="label"
      class="pro-tree-select-options"
    >
      <el-tree
        ref="tree"
        v-bind="attrs"
        :data="data"
        :show-checkbox="multiple"
        :check-strictly="checkStrictly"
        :default-checked-keys="multiple && modelValue"
        :default-expanded-keys="multiple && modelValue"
        :filter-node-method="filter"
        node-key="value"
        highlight-current
        class="pro-tree-select-tree"
        @node-click="upData"
        @check-change="upData"
      />
    </el-option>
    <el-option
      v-for="item in list"
      v-show="false"
      :key="item.value"
      :value="item.value"
      :label="item.label"
    />
  </el-select>
</template>

<script lang="ts">
export default { name: 'ProTreeSelect' }
</script>

<script setup lang="ts">
import { ElSelect, ElOption, ElTree } from 'element-plus'
import { useAttrs, useSelectData, useTreeSelect } from '../composables'
import type { UnknownObject } from '../types'

const props = defineProps<{
  modelValue?: string | number | Array<string | number>
  data: Record<string, string | number | UnknownObject>[]
  config?: {
    value?: string
    label?: string
    disabled?: string
    children?: string
  }
  clearable?: boolean
  multiple?: boolean
  checkStrictly?: boolean
}>()
const emit = defineEmits(['update:modelValue'])
const attrs = useAttrs()
const data = useSelectData(props)
const {
  modelValue,
  clearable,
  multiple,
  checkStrictly,
  tree,
  value,
  label,
  list,
  filter,
  remove,
  upData,
  clear,
} = useTreeSelect(props, emit)
</script>
