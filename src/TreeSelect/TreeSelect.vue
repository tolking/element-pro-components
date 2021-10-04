<template>
  <el-select
    :model-value="modelValue"
    :clearable="clearable"
    :multiple="multiple"
    :filterable="filterable"
    :filter-method="tree.filter"
    popper-class="pro-tree-select-popper"
    class="pro-tree-select"
    @visible-change="togglePopper"
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
        :default-expanded-keys="expandedKeys"
        :filter-node-method="filter"
        node-key="value"
        highlight-current
        class="pro-tree-select-tree"
        @node-click="upData"
        @check-change="upData"
      >
        <template #default="scope">
          <slot
            v-bind="scope"
            :multiple="multiple"
            name="default"
          >
            <span
              :class="scope.node.disabled && !multiple ? 'is-disabled' : ''"
            >
              {{ scope.node.label }}
            </span>
          </slot>
        </template>
      </el-tree>
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
import { ElSelect, ElOption, ElTree, useAttrs } from 'element-plus'
import { useSelectData, useTreeSelect } from '../composables/index'
import type { UnknownObject } from '../types/index'

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
  filterable?: boolean
  onlySelectLeaf?: boolean
}>()
const emit = defineEmits([
  'update:modelValue',
  'clear',
  'remove-tag',
  'visible-change',
  'node-click',
  'check-change',
])
const attrs = useAttrs()
const data = useSelectData(props)
const {
  modelValue,
  clearable,
  multiple,
  checkStrictly,
  expandedKeys,
  filterable,
  tree,
  value,
  label,
  list,
  filter,
  togglePopper,
  remove,
  upData,
  clear,
} = useTreeSelect(props, emit)
</script>
