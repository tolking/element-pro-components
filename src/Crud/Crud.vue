<template>
  <section class="pro-crud">
    <pro-form
      v-if="searchColumns && searchColumns.length"
      :model-value="search"
      :columns="searchColumns"
      :menu="searchMenu"
      :size="size"
      :rules="searchRules"
      :inline="true"
      class="pro-crud-search"
      @update:modelValue="upSearchData"
      @submit="searchForm"
      @reset="searchReset"
    >
      <template
        v-for="slot in searchSlotList"
        :key="slot.prop"
        #[slot.labelSlot]="scope"
      >
        <slot
          v-bind="scope"
          :name="'search-' + slot.labelSlot"
        />
      </template>
      <template
        v-for="slot in searchSlotList"
        :key="slot.prop"
        #[slot.errorSlot]="scope"
      >
        <slot
          v-bind="scope"
          :name="'search-' + slot.errorSlot"
        />
      </template>
      <template
        v-for="slot in searchSlotList"
        :key="slot.prop"
        #[slot.prop]="scope"
      >
        <slot
          v-bind="scope"
          :name="'search-' + slot.prop"
        />
      </template>
      <template #default>
        <slot name="search" />
      </template>
      <template #menu-left>
        <slot name="search-menu-left" />
      </template>
      <template #menu-right>
        <slot name="search-menu-right" />
      </template>
    </pro-form>
    <div class="pro-crud-menu">
      <div class="pro-menu-item">
        <slot
          :size="size"
          name="menu-left"
        />
        <el-button
          v-if="menuColumns && menuColumns.add"
          v-bind="menuColumns.addProps"
          :size="size"
          @click="openForm('add')"
        >
          {{ menuColumns.addText }}
        </el-button>
        <slot
          :size="size"
          name="menu-right"
        />
      </div>
      <div class="pro-menu-item">
        <slot name="action" />
      </div>
    </div>
    <pro-table
      v-bind="attrs"
      ref="table"
      :columns="tableColumns"
      :menu="menuColumns"
      :size="size"
      class="pro-crud-table"
    >
      <template
        v-for="slot in tableSlotList"
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
        v-for="slot in tableSlotList"
        :key="slot.prop"
        #[slot.prop]="scope"
      >
        <slot
          v-bind="scope"
          :name="'table-' + slot.prop"
        >
          {{ scope.row[slot.prop] }}
        </slot>
      </template>
      <template #default>
        <slot name="table" />
      </template>
      <template #append>
        <slot name="append" />
      </template>
      <template #expand="scope">
        <slot
          v-bind="scope"
          name="expand"
        />
      </template>
      <template #menu="scope">
        <el-button
          v-if="menuColumns && menuColumns.showEdit(scope.row)"
          v-bind="menuColumns.editProps"
          :size="scope.size"
          @click="openForm('edit', scope.row)"
        >
          {{ menuColumns.editText }}
        </el-button>
        <el-button
          v-if="menuColumns && menuColumns.showDel(scope.row)"
          v-bind="menuColumns.delProps"
          :size="scope.size"
          @click="delRow(scope.row)"
        >
          {{ menuColumns.delText }}
        </el-button>
        <slot
          v-bind="scope"
          name="menu"
        />
      </template>
    </pro-table>
    <el-dialog
      v-if="formColumns && formColumns.length"
      v-model="dialogVisible"
      v-bind="bindDialog"
    >
      <pro-form
        v-if="dialogVisible"
        v-bind="attrs"
        ref="form"
        :model-value="modelValue"
        :columns="formColumns"
        :menu="menuColumns"
        :size="size"
        class="pro-crud-form"
        @update:modelValue="upFormData"
        @submit="submitForm"
        @reset="resetForm"
      >
        <template
          v-for="slot in formSlotList"
          :key="slot.prop"
          #[slot.labelSlot]="scope"
        >
          <slot
            v-bind="scope"
            :name="slot.labelSlot"
          />
        </template>
        <template
          v-for="slot in formSlotList"
          :key="slot.prop"
          #[slot.errorSlot]="scope"
        >
          <slot
            v-bind="scope"
            :name="slot.errorSlot"
          />
        </template>
        <template
          v-for="slot in formSlotList"
          :key="slot.prop"
          #[slot.prop]="scope"
        >
          <slot
            v-bind="scope"
            :name="'form-' + slot.prop"
          />
        </template>
        <template #default>
          <slot name="form" />
        </template>
        <template #menu-left>
          <slot name="form-menu-left" />
        </template>
        <template #menu-right>
          <slot name="form-menu-right" />
        </template>
      </pro-form>
    </el-dialog>
  </section>
</template>

<script lang="ts">
export default { name: 'ProCrud' }
</script>

<script setup lang="ts">
import { toRefs } from 'vue'
import { ElDialog, ElButton } from 'element-plus'
import {
  useCrudColumns,
  useCrudForm,
  useCrudSearchForm,
  useCrudAttrs,
  useTableMethods,
  useTableSlotList,
  useFormMethods,
  useFormSlotList,
} from '../composables/index'
import ProForm from '../Form/index'
import ProTable from '../Table/index'
import type {
  CrudColumn,
  FormColumn,
  TableColumn,
  UnknownObject,
} from '../types/index'

const props = defineProps<{
  columns?: Array<Record<string, unknown> & CrudColumn>
  addColumns?: Array<Record<string, unknown> & FormColumn>
  editColumns?: Array<Record<string, unknown> & FormColumn>
  formColumns?: Array<Record<string, unknown> & FormColumn>
  searchColumns?: Array<Record<string, unknown> & FormColumn>
  tableColumns?: Array<Record<string, unknown> & TableColumn>
  menu?: boolean | Record<string, unknown>
  modelValue?: Record<string, unknown>
  search?: Record<string, unknown>
  searchRules?: Record<string, unknown>
  size?: 'medium' | 'small' | 'mini'
  beforeOpen?: (
    done: () => void,
    type: 'add' | 'edit',
    row?: UnknownObject
  ) => void
}>()
const emit = defineEmits([
  'update:modelValue',
  'update:search',
  'submit',
  'reset',
  'delete',
  'search',
  'searchReset',
])
const { searchRules } = toRefs(props)
const { searchColumns, tableColumns, menuColumns } = useCrudColumns(props)
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
const {
  form,
  validate,
  resetFields,
  clearValidate,
  validateField,
  upFormData,
  resetForm,
} = useFormMethods(emit)
const {
  dialogVisible,
  formType,
  formColumns,
  openForm,
  submitForm,
} = useCrudForm(props, emit, resetForm)
const { searchMenu, searchForm, searchReset, upSearchData } = useCrudSearchForm(
  emit,
  menuColumns
)
const { attrs, bindDialog } = useCrudAttrs(formType, resetForm, menuColumns)
const tableSlotList = tableColumns.value
  ? useTableSlotList(tableColumns.value)
  : []
const searchSlotList = searchColumns.value
  ? useFormSlotList(searchColumns.value)
  : []
const formSlotList = formColumns.value ? useFormSlotList(formColumns.value) : []

function delRow(row: UnknownObject) {
  emit('delete', row)
}

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
  validate,
  resetFields,
  clearValidate,
  validateField,
})
</script>
