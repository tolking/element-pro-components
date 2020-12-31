<template>
  <el-table-column v-bind="bindColumn">
    <template
      v-if="item.slot"
      #header="scope"
    >
      <slot
        v-bind="scope"
        :name="item.prop + '-header'"
      />
    </template>
    <template #default="scope">
      <template v-if="item.children && item.children.length">
        <table-item
          v-for="(child, index) in item.children"
          :key="index"
          :item="child"
        >
          <template
            v-for="slot in slotList"
            :key="slot.prop"
            #[slot.header]="childScope"
          >
            <slot
              v-bind="childScope"
              :name="slot.header"
            >
              {{ childScope.column.label }}
            </slot>
          </template>
          <template
            v-for="slot in slotList"
            :key="slot.prop"
            #[slot.prop]="childScope"
          >
            <slot
              v-bind="childScope"
              :name="slot.prop"
            >
              {{ childScope.row[slot.prop] }}
            </slot>
          </template>
        </table-item>
      </template>
      <template v-else-if="item.slot">
        <slot
          v-bind="scope"
          :name="item.prop"
        >
          {{ scope.row[item.prop] }}
        </slot>
      </template>
      <template v-else>
        {{ scope.row[item.prop] }}
      </template>
    </template>
  </el-table-column>
</template>

<script setup lang="ts">
import { defineProps, inject, toRefs } from 'vue'
import { ElTableColumn } from 'element-plus'
import { useColumnsBind, useColumnsSlotList } from '../composables'
import type { ProColumns, ProColumnsDefaultBind } from '../types/index'

const props = defineProps<{
  item: Record<string, unknown>
}>()
const { item } = toRefs(props)
const defaultBind = inject<ProColumnsDefaultBind>('defaultBind')
const slotList = useColumnsSlotList(item.value.children as ProColumns)
const bindColumn = useColumnsBind(item, defaultBind)
</script>
