<template>
  <el-table
    ref="table"
    v-bind="attrs"
    :size="size"
    class="pro-table"
  >
    <el-table-column
      v-if="selection"
      v-bind="bindSelection"
      type="selection"
    />
    <el-table-column
      v-if="expand"
      v-bind="bindExpand"
      type="expand"
    >
      <template #default="scope">
        <slot
          v-bind="scope"
          name="expand"
        />
      </template>
    </el-table-column>
    <el-table-column
      v-if="index"
      v-bind="bindIndex"
      type="index"
    />
    <pro-table-item
      v-for="item in columns"
      :key="item.prop"
      :item="item"
    >
      <template
        v-for="slot in slotList"
        :key="slot.prop"
        #[slot.header]="scope"
      >
        <slot
          v-bind="scope"
          :name="slot.header"
        />
      </template>
      <template
        v-for="slot in slotList"
        :key="slot.prop"
        #[slot.prop]="scope"
      >
        <slot
          v-bind="scope"
          :name="slot.prop"
          :size="size"
        />
      </template>
    </pro-table-item>
    <slot />
    <template #append>
      <slot name="append" />
    </template>
    <el-table-column
      v-if="menu"
      v-bind="bindMenu"
      type="menu"
    >
      <template #default="scope">
        <slot
          v-bind="scope"
          :size="size"
          name="menu"
        />
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    v-if="total"
    v-bind="pagination"
    :current-page="currentPage"
    :page-size="pageSize"
    :total="total"
    class="pro-pagination"
    @size-change="sizeChange"
    @current-change="currentChange"
    @prev-click="prevClick"
    @next-click="nextClick"
  />
</template>

<script lang="ts">
export default { name: 'ProTable' }
</script>

<script setup lang="ts">
import { provide, toRefs, useAttrs } from 'vue'
import { ElTable, ElTableColumn, ElPagination } from 'element-plus'
import {
  useTableColumns,
  useTableBind,
  useTableDefaultBind,
  useTableSlotList,
  useTableMethods,
  usePagination,
} from '../composables'
import ProTableItem from './TableItem.vue'
import type {
  TableColumn,
  ITableSelectionColumns,
  ITableExpandColumns,
  ITableIndexColumns,
  ITableMenuColumns,
} from '../types/index'

const props = defineProps<{
  selection?: boolean | Record<string, unknown>
  expand?: boolean | Record<string, unknown>
  index?: boolean | Record<string, unknown>
  menu?: boolean | Record<string, unknown>
  columns: Array<Record<string, unknown> & TableColumn>
  total?: number
  pageSize?: number
  currentPage?: number
  pagination?: Record<string, unknown>
  showOverflowTooltip?: boolean
  align?: 'left' | 'center' | 'right'
  headerAlign?: 'left' | 'center' | 'right'
  size?: 'medium' | 'small' | 'mini'
}>()
const emit = defineEmits([
  'update:currentPage',
  'update:pageSize',
  'size-change',
  'current-change',
  'prev-click',
  'next-click',
])
const attrs = useAttrs()
const {
  selection,
  expand,
  index,
  menu,
  total,
  pageSize,
  currentPage,
  size,
} = toRefs(props)
const columns = useTableColumns(props)
const slotList = useTableSlotList(columns)
const defaultBind = useTableDefaultBind(props)
const bindSelection = useTableBind<ITableSelectionColumns>(
  selection,
  defaultBind
)
const bindExpand = useTableBind<ITableExpandColumns>(expand, defaultBind)
const bindIndex = useTableBind<ITableIndexColumns>(index, defaultBind)
const bindMenu = useTableBind<ITableMenuColumns>(menu, defaultBind)
const {
  pagination,
  sizeChange,
  currentChange,
  prevClick,
  nextClick,
} = usePagination(props, emit)
const {
  table,
  clearSelection,
  toggleRowSelection,
  toggleAllSelection,
  toggleRowExpansion,
  setCurrentRow,
  clearSort,
  clearFilter,
  doLayout,
  sort,
} = useTableMethods()

provide('defaultBind', defaultBind)

defineExpose({
  clearSelection,
  toggleRowSelection,
  toggleAllSelection,
  toggleRowExpansion,
  setCurrentRow,
  clearSort,
  clearFilter,
  doLayout,
  sort,
})
</script>
