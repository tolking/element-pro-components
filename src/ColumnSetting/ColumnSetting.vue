<template>
  <el-dropdown
    :placement="placement"
    :trigger="trigger"
    class="pro-column-setting"
  >
    <el-button
      :size="size"
      icon="el-icon-setting"
      circle
    />
    <template #dropdown>
      <el-dropdown-menu>
        <el-tree
          v-bind="attrs"
          :data="modelValue"
          :default-checked-keys="checkedKeys"
          node-key="prop"
          show-checkbox
          check-strictly
          draggable
          class="pro-column-setting-tree"
          @node-drag-start="handleDropStart"
          @node-drag-end="handleDropEnd"
          @check="handleCheckChange"
        />
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup name="ProColumnSetting" lang="ts">
import { toRefs, defineEmit, defineProps, computed, useContext } from 'vue'
import { ElDropdown, ElDropdownMenu, ElButton, ElTree } from 'element-plus'
import { filterFlat } from '../utils/index'
import type { TableColumn } from '../types/index'

const props = defineProps<{
  modelValue: Array<Record<string, unknown> & TableColumn>
  trigger?: 'hover' | 'click' | 'contextmenu'
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
  size?: 'medium' | 'small' | 'mini'
}>()
const emit = defineEmit(['updata:modelValue'])
const { attrs } = useContext()
const { modelValue, trigger, placement, size } = toRefs(props)
const checkedKeys = computed(() => {
  if (!props.modelValue) return []
  return filterFlat<TableColumn[], string[]>(
    props.modelValue,
    'hide',
    false,
    (item) => item.prop as string
  )
})

function handleDropStart({ data }: { data: TableColumn }) {
  data.hide = !data.hide
  emit('updata:modelValue', modelValue)
}

function handleDropEnd({ data }: { data: TableColumn }) {
  data.hide = !data.hide
  emit('updata:modelValue', modelValue)
}

function handleCheckChange(data: TableColumn) {
  data.hide = !data.hide
  emit('updata:modelValue', modelValue)
}
</script>

<style lang="postcss">
.pro-column-setting-tree .el-tree-node .el-tree-node__content {
  padding-right: 10px;
}
</style>
