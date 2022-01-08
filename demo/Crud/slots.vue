<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns"
    :menu="{ label: 'Operations' }"
    :data="data"
    selection
    label-width="100px"
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  >
    <template #menu-right="{ size }">
      <el-button
        :size="size"
        type="danger"
      >
        Remove
      </el-button>
    </template>
    <template #menu="{ size }">
      <el-button
        :size="size"
        type="text"
      >
        Detail
      </el-button>
    </template>
    <template #form-name>
      <span>form slot</span>
    </template>
    <template #table-name="{ row, size }">
      <el-tag :size="size">
        {{ row?.name }}
      </el-tag>
    </template>
    <template #name-header="{ column }">
      <s>{{ column.label }}</s>
    </template>
    <template #action>
      <el-button
        :icon="Refresh"
        circle
        style="margin-right: 8px"
      />
      <pro-column-setting v-model="columns" />
    </template>
  </pro-crud>
</template>

<script>
import { defineComponent, h, ref } from 'vue'
import { Clock, Refresh } from '@element-plus/icons-vue'
import {
  defineCrudColumns,
  defineCrudSubmit,
  defineCrudSearch,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const form = ref({})
    const serachForm = ref({})
    const columns = ref(
      defineCrudColumns([
        {
          label: 'Date',
          prop: 'date',
          component: 'el-input',
          add: true,
          edit: true,
          search: true,
          render: '--',
          props: {
            slots: {
              suffix: () =>
                h('span', { className: 'el-input__icon' }, h(Clock)),
            },
          },
        },
        {
          label: 'Name',
          prop: 'name',
          component: 'el-input',
          add: true,
          search: true,
          slot: true,
        },
        {
          label: 'Address',
          prop: 'address',
          component: 'el-input',
          add: true,
          edit: true,
          render: (row) => h('em', null, row.address),
        },
      ])
    )
    const data = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])

    const search = defineCrudSearch((done, isValid, invalidFields) => {
      console.log('search', serachForm.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    const submit = defineCrudSubmit(
      (close, done, formType, isValid, invalidFields) => {
        console.log('submit', form.value, formType, isValid, invalidFields)
        setTimeout(() => {
          isValid ? close() : done()
        }, 1000)
      }
    )

    const deleteRow = (row) => {
      console.log('deleteRow', row)
    }

    return {
      Refresh,
      form,
      serachForm,
      data,
      columns,
      search,
      submit,
      deleteRow,
    }
  },
})
</script>

<style>
.el-input__icon {
  width: 14px;
}
</style>
