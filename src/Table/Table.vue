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
    <!-- TODO: expand based on ProForm ? -->
    <el-table-column
      v-if="expand"
      type="expand"
    >
      <template #default="scope">
        {{ scope.row }}
      </template>
    </el-table-column>
    <el-table-column
      v-if="index"
      v-bind="bindIndex"
      type="index"
    />
    <pro-table-item
      v-for="(item, index) in columns"
      :key="index"
      :item="item"
    />
    <slot />
  </el-table>
  <el-pagination
    layout="prev, pager, next"
    :total="50"
  />
</template>

<script setup lang="ts">
import { computed, defineProps, toRefs, useContext } from 'vue'
import { ElTable, ElTableColumn, ElPagination } from 'element-plus'
import { isObject } from '@vue/shared'
import ProTableItem from './TableItem.vue'

const props = defineProps<{
  selection: boolean | Record<string, unknown>
  expand: boolean
  index: boolean | Record<string, unknown>
  columns: Record<string, unknown>[]
}>()
const { attrs } = useContext()
const { selection, expand, index, columns } = toRefs(props)
const bindSelection = computed(() => {
  return selection.value && isObject(selection.value) && selection.value
})
const bindIndex = computed(() => {
  return index.value && isObject(index.value) && index.value
})
</script>
