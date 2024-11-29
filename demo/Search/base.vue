<template>
  <pro-search
    v-model="search"
    :columns="columns"
    label-width="100px"
    @submit="submit"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
  setup() {
    const search = ref({})
    const columns = [
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
    ]
    const submit = (done, isValid, invalidFields) => {
      ElMessage(`submit: ${isValid}`)
      console.log(search.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    return {
      search,
      columns,
      submit,
    }
  },
})
</script>
