<template>
  <el-table-column v-bind="item">
    <template
      v-if="item.slot"
      #header="scope"
    >
      <slot
        v-bind="scope"
        :name="item.prop + '-header'"
      >
        {{ scope.column.label }}
      </slot>
    </template>
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
    <template v-if="item.children && item.children.length">
      <table-item
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
      />
    </template>
  </el-table-column>
</template>

<script setup lang="ts">
import { defineProps, toRefs, useContext } from 'vue'
import { ElTableColumn } from 'element-plus'

const props = defineProps<{
  item: Record<string, unknown>
}>()
const { item } = toRefs(props)
</script>
