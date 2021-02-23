<template>
  <pro-form
    v-if="searchColumns && searchColumns.length"
    :model-value="search"
    :columns="searchColumns"
    :inline="true"
    @update:modelValue="upSearchData"
  >
    <template #default>
      <slot name="search" />
    </template>
    <template #menu>
      <el-button
        icon="el-icon-search"
        type="primary"
      />
      <slot name="menu-serach" />
    </template>
  </pro-form>
  <div class="pro-crud-menu">
    <div class="pro-menu-item">
      <slot name="menu-left" />
      <el-button
        v-if="addColumns && addColumns.length"
        icon="el-icon-plus"
        type="primary"
        @click="openForm('add')"
      />
      <slot name="menu-right" />
    </div>
    <div class="pro-menu-item">
      <slot name="action-left" />
      <!-- TODO: add setting(change hide in columns) ..? -->
      <slot name="action-right" />
    </div>
  </div>
  <pro-table
    v-if="tableColumns && tableColumns.length"
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
    <template #menu="{ size, type, row }">
      <el-button
        v-if="menuColumns.showEdit(row)"
        :size="size"
        :type="type"
        icon="el-icon-edit"
        @click="openForm('edit')"
      >
        edit
      </el-button>
      <el-button
        v-if="menuColumns.showDel(row)"
        :size="size"
        :type="type"
        icon="el-icon-delete"
      >
        delete
      </el-button>
      <slot name="menu" />
    </template>
  </pro-table>
  <el-dialog
    v-model="dialogVisible"
    :title="formType"
  >
    <pro-form
      v-if="formColumns && formColumns.length"
      :model-value="modelValue"
      :columns="formColumns"
      @update:modelValue="upFormData"
    >
      <template #default>
        <slot name="form" />
      </template>
      <template #menu>
        <el-button type="primary">
          Submit
        </el-button>
        <el-button>Cancel</el-button>
        <slot name="menu-form" />
      </template>
    </pro-form>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, useContext, defineEmit, defineProps, computed } from 'vue'
import { ElDialog } from 'element-plus'
import { useCrudColumns } from '../composables/index'
import ProForm from '../Form/index'
import ProTable from '../Table/index'
import type {
  ProCrudColumn,
  ProFormColumn,
  ProTableColumn,
} from '../types/index'

type FormType = 'add' | 'edit'

const props = defineProps<{
  columns?: Array<Record<string, unknown> & ProCrudColumn>
  addColumns?: Array<Record<string, unknown> & ProFormColumn>
  editColumns?: Array<Record<string, unknown> & ProFormColumn>
  searchColumns?: Array<Record<string, unknown> & ProFormColumn>
  tableColumns?: Array<Record<string, unknown> & ProTableColumn>
  menu: boolean | Record<string, unknown>
  modelValue: Record<string, unknown>
  search: Record<string, unknown>
}>()
const emit = defineEmit(['update:modelValue', 'update:search'])
const { attrs } = useContext()
const {
  addColumns,
  editColumns,
  searchColumns,
  tableColumns,
  menuColumns,
} = useCrudColumns(props)
const dialogVisible = ref(false)
const formType = ref<FormType>('add')
const formColumns = computed(() => {
  return formType.value === 'add' ? addColumns.value : editColumns.value
})

function openForm(type: FormType) {
  formType.value = type
  dialogVisible.value = true
}
function upSearchData(value: unknown) {
  emit('update:search', value)
}
function upFormData(value: unknown) {
  emit('update:modelValue', value)
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
