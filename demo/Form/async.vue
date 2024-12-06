<template>
  <div style="margin-bottom: 20px">
    <el-button type="primary" @click="createForm"> Load Form </el-button>
    <el-button type="info" @click="createDict"> Load Dict </el-button>
    <el-button type="danger" @click="destroyForm"> Destroy </el-button>
  </div>
  <pro-form
    v-model="form"
    :columns="columns"
    label-width="100px"
    @submit="submit"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { defineFormColumns, defineFormSubmit } from 'element-pro-components'

export default defineComponent({
  setup() {
    const list = ref([])
    const form = ref({})
    const columns = ref(defineFormColumns([]))
    const submit = defineFormSubmit((done, isValid, invalidFields) => {
      ElMessage(`submit: ${isValid}`)
      console.log(form.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })
    const createForm = () => {
      columns.value = defineFormColumns([
        {
          label: 'Name',
          prop: 'name',
          component: 'el-input',
        },
        {
          label: 'Language',
          prop: 'language',
          component: 'pro-radio',
          props: {
            data: list,
          },
        },
      ])
    }
    const createDict = () => {
      list.value = [
        { value: 'Go', label: 'go' },
        { value: 'JavaScript', label: 'javascript' },
        { value: 'Python', label: 'python' },
        { value: 'Dart', label: 'dart' },
        { value: 'V', label: 'v' },
      ]
    }
    const destroyForm = () => {
      columns.value = []
      list.value = []
    }

    return {
      form,
      columns,
      submit,
      createForm,
      createDict,
      destroyForm,
    }
  },
})
</script>
