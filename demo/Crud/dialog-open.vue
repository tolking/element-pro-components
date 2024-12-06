<template>
  <pro-crud
    ref="crudRef"
    v-model="form"
    :columns="columns"
    :data="data"
    :detail="detail"
    :before-open="beforeOpen"
    label-width="100px"
  >
    <template #menu-right="{ size }">
      <el-button :size="size" @click="crudRef.openDialog('add')">
        open
      </el-button>
      <el-button :size="size" @click="crudRef.openDialog('edit', data[0])">
        edit
      </el-button>
      <el-button :size="size" @click="crudRef.openDialog('detail', data[0])">
        detail
      </el-button>
    </template>
    <template #form-menu-right="{ size }">
      <el-button :size="size" @click="crudRef.closeDialog()"> close </el-button>
    </template>
  </pro-crud>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { defineCrudColumns, defineCrudBeforeOpen } from 'element-pro-components'

export default defineComponent({
  setup() {
    const crudRef = ref()
    const form = ref({})
    const detail = ref({})
    const columns = defineCrudColumns([
      {
        label: 'Date',
        prop: 'date',
        component: 'el-input',
        form: true,
        detail: true,
      },
      {
        label: 'Name',
        prop: 'name',
        detail: true,
      },
      {
        label: 'Address',
        prop: 'address',
        detail: true,
      },
    ])
    const data = [
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
    ]

    const beforeOpen = defineCrudBeforeOpen((done, type, row) => {
      if (type === 'edit') {
        form.value = row || {}
      } else if (type === 'detail') {
        detail.value = row || {}
      }
      done()
    })

    return {
      crudRef,
      form,
      columns,
      data,
      detail,
      beforeOpen,
    }
  },
})
</script>
