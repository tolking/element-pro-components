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
        <pro-table-item
          v-for="(child, index) in item.children"
          :key="child.prop || index"
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
            />
          </template>
        </pro-table-item>
      </template>
      <template v-else-if="item.slot">
        <slot
          v-bind="scope"
          :name="item.prop"
        >
          <pro-table-component
            :row="scope.row"
            :prop="item.prop"
            :render="item.render"
          />
        </slot>
      </template>
      <template v-else>
        <pro-table-component
          :row="scope.row"
          :prop="item.prop"
          :render="item.render"
        />
      </template>
    </template>
  </el-table-column>
</template>

<script setup name="ProTableItem" lang="ts">
import { defineProps, inject, toRefs } from 'vue'
import { ElTableColumn } from 'element-plus'
import { useTableBind, useTableSlotList } from '../composables'
import ProTableItem from './TableItem.vue'
import ProTableComponent from './TableComponent'
import type {
  TableColumn,
  ITableColumns,
  TableColumnsProps,
} from '../types/index'

const props = defineProps<{ item: TableColumn }>()
const { item } = toRefs(props)
const defaultBind = inject<TableColumnsProps>('defaultBind')
const slotList = useTableSlotList(item.value.children as ITableColumns)
const bindColumn = useTableBind<TableColumn>(item, defaultBind)
</script>
