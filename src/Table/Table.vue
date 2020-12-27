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
        v-for="slot in slotItem"
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
        v-for="slot in slotItem"
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
import { computed, defineEmit, defineProps, toRefs, useContext } from 'vue'
import { ElTable, ElTableColumn, ElPagination } from 'element-plus'
import { isObject } from '@vue/shared'
import { useColumnsSlotList } from '../composables'
import ProTableItem from './TableItem.vue'

const props = defineProps<{
  selection: boolean | Record<string, unknown>
  expand: boolean
  index: boolean | Record<string, unknown>
  columns: Record<string, unknown>[]
  total: number
  pageSize: number
  currentPage: number
  pagination?: Record<string, unknown>
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
  columns,
  total,
  pageSize,
  currentPage,
  pagination,
} = toRefs(props)
const slotItem = useColumnsSlotList(columns.value)
const bindSelection = computed(() => {
  return selection.value && isObject(selection.value) && selection.value
})
const bindIndex = computed(() => {
  return index.value && isObject(index.value) && index.value
})
const bindPagination = computed(() => {
  const _default = {
    background: true,
    layout: 'total, sizes, prev, pager, next, jumper',
  }

  return Object.assign(_default, pagination?.value)
})

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
