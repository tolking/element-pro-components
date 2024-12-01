<template>
  <pro-search
    v-model="search"
    :columns="columns"
    :menu="menu"
    label-width="100px"
    @submit="submit"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import {
  defineSearchColumns,
  defineSearchMenuColumns,
  defineSearchSubmit,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const search = ref({})
    const menu = defineSearchMenuColumns({
      submitText: 'Create',
      reset: false,
    })
    const columns = defineSearchColumns([
      {
        label: 'Name',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: 'Address',
        prop: 'address',
        component: 'el-input',
      },
      {
        label: 'Date',
        prop: 'date',
        component: 'el-date-picker',
        props: {
          type: 'date',
          style: 'width: 100%',
        },
      },
    ])
    const submit = defineSearchSubmit((done, isValid, invalidFields) => {
      ElMessage(`submit: ${isValid}`)
      console.log(search.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    return {
      menu,
      search,
      columns,
      submit,
    }
  },
})
</script>
