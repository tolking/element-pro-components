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
          :data="modelValue"
          :default-checked-keys="checkedKeys"
          :empty-text="emptyText"
          :render-after-expand="renderAfterExpand"
          :expand-on-click-node="expandOnClickNode"
          :default-expand-all="defaultExpandAll"
          :check-on-click-node="checkOnClickNode"
          :check-descendants="checkDescendants"
          :auto-expand-parent="autoExpandParent"
          :allow-drag="allowDrag"
          :allow-drop="allowDrop"
          :highlight-current="highlightCurrent"
          :filter-node-method="filterNodeMethod"
          :accordion="accordion"
          :indent="indent"
          :icon-class="iconClass"
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

<script lang="ts">
export default { name: 'ProColumnSetting' }
</script>

<script setup lang="ts">
import { toRefs, computed } from 'vue'
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
  emptyText?: string
  renderAfterExpand?: boolean
  expandOnClickNode?: boolean
  defaultExpandAll?: boolean
  checkOnClickNode?: boolean
  checkDescendants?: boolean
  autoExpandParent?: boolean
  allowDrag?: (...arg: unknown[]) => unknown
  allowDrop?: (...arg: unknown[]) => unknown
  highlightCurrent?: boolean
  filterNodeMethod?: (...arg: unknown[]) => unknown
  accordion?: boolean
  indent?: number
  iconClass?: string
}>()
const emit = defineEmits(['updata:modelValue'])
const { modelValue, trigger, placement, size } = toRefs(props)
const checkedKeys = computed(() => {
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
