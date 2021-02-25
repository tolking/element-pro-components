<template>
  <pro-form
    v-if="searchColumns && searchColumns.length"
    :model-value="search"
    :columns="searchColumns"
    :menu="serachMenu"
    :inline="true"
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
    :columns="tableColumns"
    :menu="menuColumns"
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
      :model-value="modelValue"
      :columns="formColumns"
      @update:modelValue="upFormData"
      @submit="submitForm"
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
import { useCrudColumns, useCrudForm } from '../composables/index'
import ProForm from '../Form/index'
import ProTable from '../Table/index'
import type {
  ProCrudColumn,
  ProFormColumn,
  ProTableColumn,
  UnknownObject,
} from '../types/index'

const props = defineProps<{
  columns?: Array<Record<string, unknown> & ProCrudColumn>
  addColumns?: Array<Record<string, unknown> & ProFormColumn>
  editColumns?: Array<Record<string, unknown> & ProFormColumn>
  searchColumns?: Array<Record<string, unknown> & ProFormColumn>
  tableColumns?: Array<Record<string, unknown> & ProTableColumn>
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
  'delete',
  'serach',
])
const { attrs } = useContext()
const { searchColumns, tableColumns, menuColumns, serachMenu } = useCrudColumns(
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
  upFormData,
} = useCrudForm(props, emit, menuColumns)

function delRow(row: UnknownObject) {
  emit('delete', row)
}
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
