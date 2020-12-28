<template>
  <el-table
    v-bind="attrs"
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
        >
          {{ scope.column.label }}
        </slot>
      </template>
      <template
        v-for="slot in slotList"
        :key="slot.prop"
        #[slot.prop]="scope"
      >
        <slot
          v-bind="scope"
          :name="slot.prop"
        >
          {{ scope.row[slot.prop] }}
        </slot>
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
          name="menu"
        />
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    v-bind="bindPagination"
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

<script setup lang="ts">
import { defineProps, provide, toRefs, useContext, defineEmit } from 'vue'
import { ElTable, ElTableColumn, ElPagination } from 'element-plus'
import {
  useColumnsBind,
  useColumnsDefaultBind,
  useColumnsSlotList,
  usePaginationBind,
} from '../composables'
import ProTableItem from './TableItem.vue'

const props = defineProps<{
  selection: boolean | Record<string, unknown>
  expand: boolean | Record<string, unknown>
  index: boolean | Record<string, unknown>
  menu: boolean | Record<string, unknown>
  columns: Record<string, unknown>[]
  total: number
  pageSize: number
  currentPage: number
  pagination?: Record<string, unknown>
  showOverflowTooltip: boolean
  align?: 'left' | 'center' | 'right'
  headerAlign?: 'left' | 'center' | 'right'
}>()
const emit = defineEmit([
  'update:currentPage',
  'update:pageSize',
  'size-change',
  'current-change',
  'prev-click',
  'next-click',
])
const { attrs } = useContext()
const {
  selection,
  expand,
  index,
  menu,
  columns,
  total,
  pageSize,
  currentPage,
  pagination,
} = toRefs(props)
const slotList = useColumnsSlotList(columns)
const defaultBind = useColumnsDefaultBind(props)
const bindSelection = useColumnsBind(selection, defaultBind)
const bindExpand = useColumnsBind(expand, defaultBind)
const bindIndex = useColumnsBind(index, defaultBind)
const bindMenu = useColumnsBind(menu, defaultBind)
const bindPagination = usePaginationBind(pagination)

provide('defaultBind', defaultBind)

function sizeChange(size: number) {
  emit('update:pageSize', size)
  emit('size-change', size)
}
function currentChange(current: number) {
  emit('update:currentPage', current)
  emit('current-change', current)
}
function prevClick(current: number) {
  emit('current-change', current)
}
function nextClick(current: number) {
  emit('current-change', current)
}
</script>

<style>
.pro-table + .pro-pagination {
  padding: 15px 0;
  text-align: right;
}
</style>
