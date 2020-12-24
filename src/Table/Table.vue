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
      v-if="index"
      v-bind="bindIndex"
      type="index"
    />
    <el-table-column
      v-for="item in columns"
      :key="item.prop"
      v-bind="item"
    >
      <template
        v-if="item.slot"
        #default="scope"
      >
        <slot
          v-bind="scope"
          :name="item.prop"
        >
          {{ scope.row[item.prop] }}
        </slot>
      </template>
    </el-table-column>
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

const props = defineProps<{
  selection: boolean | Record<string, unknown>
  index: boolean | Record<string, unknown>
  columns: Record<string, unknown>[]
}>()
const { attrs } = useContext()
const { selection, index, columns } = toRefs(props)
const bindSelection = computed(
  () => selection.value && isObject(selection.value) && selection.value
)
const bindIndex = computed(
  () => index.value && isObject(index.value) && index.value
)
</script>

<style></style>
