<template>
  <pro-form
    v-model="form"
    :columns="columns"
    :menu="menu"
    label-width="100px"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const menu = {
      submitText: 'Create',
      reset: false,
    }
    const form = ref({})
    const columns = ref([
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
    ])

    return {
      menu,
      form,
      columns,
    }
  },
})
</script>
