<template>
  <pro-form
    v-if="searchColumns && searchColumns.length"
    :model-value="search"
    :columns="searchColumns"
    :menu="searchMenu"
    :inline="true"
    class="pro-crud-search"
    @update:modelValue="upSearchData"
    @submit="serachForm"
  >
    <template #default>
      <slot name="search" />
    </template>
  </pro-form>
  <div class="pro-crud-menu">
    <div class="pro-menu-item">
      <slot name="menu-left" />
      <el-button
        v-if="menuColumns.add"
        v-bind="menuColumns.addProps"
        @click="openForm('add')"
      >
        {{ menuColumns.addText }}
      </el-button>
      <slot name="menu-right" />
    </div>
    <div class="pro-menu-item">
      <slot name="action-left" />
      <!-- TODO: add setting(change hide in columns) ..? -->
      <slot name="action-right" />
    </div>
  </div>
  <pro-table
    v-bind="attrs"
    ref="table"
    :columns="tableColumns"
    :menu="menuColumns"
    class="pro-crud-table"
  >
    <template #default>
      <slot name="table" />
    </template>
    <template #append>
      <slot name="append" />
    </template>
    <template #menu="{ size, row }">
      <el-button
        v-if="menuColumns.showEdit(row)"
        v-bind="menuColumns.editProps"
        :size="size"
        @click="openForm('edit', row)"
      >
        {{ menuColumns.editText }}
      </el-button>
      <el-button
        v-if="menuColumns.showDel(row)"
        v-bind="menuColumns.delProps"
        :size="size"
        @click="delRow(row)"
      >
        {{ menuColumns.delText }}
      </el-button>
      <slot name="menu" />
    </template>
  </pro-table>
  <el-dialog
    v-model="dialogVisible"
    :title="dialogTitle"
  >
    <pro-form
      ref="form"
      :model-value="modelValue"
      :columns="formColumns"
      class="pro-crud-form"
      @update:modelValue="upFormData"
      @submit="submitForm"
      @reset="resetForm"
    >
      <template #default>
        <slot name="form" />
      </template>
    </pro-form>
  </el-dialog>
</template>

<script setup lang="ts">
import { useContext, defineEmit, defineProps } from 'vue'
import { ElDialog } from 'element-plus'
import {
  useCrudColumns,
  useCrudForm,
  useTableMethods,
  useFormMethods,
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
  searchColumns?: Array<Record<string, unknown> & FormColumn>
  tableColumns?: Array<Record<string, unknown> & TableColumn>
  menu: boolean | Record<string, unknown>
  modelValue?: Record<string, unknown>
  search?: Record<string, unknown>
  beforeOpen?: (
    next: () => void,
    type: 'add' | 'edit',
    row?: UnknownObject
  ) => void
}>()
const emit = defineEmit([
  'update:modelValue',
  'update:search',
  'submit',
  'reset',
  'delete',
  'serach',
])
const { attrs, expose } = useContext()
const { searchColumns, tableColumns, menuColumns, searchMenu } = useCrudColumns(
  props
)
const {
  dialogVisible,
  dialogTitle,
  formType,
  formColumns,
  openForm,
  serachForm,
  submitForm,
  upSearchData,
} = useCrudForm(props, emit, menuColumns)
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

function delRow(row: UnknownObject) {
  emit('delete', row)
}

expose({
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

<style lang="postcss">
.pro-crud-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  & + .pro-table {
    margin-top: 15px;
  }
}
</style>