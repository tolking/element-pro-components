<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns"
    :menu="{ label: 'Operations' }"
    :data="data"
    :detail="detail"
    :before-open="beforeOpen"
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
        text
      >
        More
      </el-button>
    </template>
    <template #action>
      <el-button
        :icon="Refresh"
        circle
        style="margin-right: 8px"
      />
      <pro-column-setting v-model="columns" />
    </template>
    <template #dialog-top="{ type }">
      <p style="text-align: center">
        dialog-top {{ type }}
      </p>
    </template>
    <template #dialog-bottom="{ type }">
      <p
        v-if="type === 'detail'"
        style="text-align: center"
      >
        only appears in the detail
      </p>
    </template>
    <template #form-name>
      <span>form slot</span>
    </template>
    <template #detail-name="{ item, size }">
      <el-tag :size="size">
        {{ item?.name }}
      </el-tag>
    </template>
    <template #table-name="{ row, size }">
      <el-tag :size="size">
        {{ row?.name }}
      </el-tag>
    </template>
    <template #table-name-header="{ column }">
      <s>{{ column.label }}</s>
    </template>
  </pro-crud>
</template>

<script>
import { defineComponent, h, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Clock, Refresh } from '@element-plus/icons-vue'
import {
  defineCrudColumns,
  defineCrudSubmit,
  defineCrudSearch,
  defineCrudBeforeOpen,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const form = ref({})
    const serachForm = ref({})
    const detail = ref({})
    const columns = ref(
      defineCrudColumns([
        {
          label: 'Date',
          prop: 'date',
          component: 'el-input',
          add: true,
          edit: true,
          search: true,
          detail: true,
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
          detail: true,
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
    ])

    const beforeOpen = defineCrudBeforeOpen((done, type, row) => {
      if (type === 'edit') {
        form.value = row || {}
      } else if (type === 'detail') {
        detail.value = row || {}
      }
      done()
    })

    const search = defineCrudSearch((done, isValid, invalidFields) => {
      ElMessage(`search: ${isValid}`)
      console.log('search', serachForm.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    const submit = defineCrudSubmit(
      (close, done, type, isValid, invalidFields) => {
        ElMessage(`submit: ${type}, ${isValid}`)
        console.log('submit', form.value, type, isValid, invalidFields)
        setTimeout(() => {
          isValid ? close() : done()
        }, 1000)
      }
    )

    const deleteRow = (row) => {
      ElMessage('deleteRow')
      console.log('deleteRow', row)
    }

    return {
      Refresh,
      form,
      columns,
      serachForm,
      data,
      detail,
      beforeOpen,
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
