<template>
  <div style="margin-bottom: 20px">
    <el-button
      type="primary"
      @click="createForm"
    >
      Load Form
    </el-button>
    <el-button
      type="info"
      @click="createDict"
    >
      Load Dict
    </el-button>
    <el-button
      type="danger"
      @click="destroyForm"
    >
      Destroy
    </el-button>
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

export default defineComponent({
  setup() {
    const list = ref([])
    const form = ref({})
    const columns = ref([])
    const submit = (done, isValid, invalidFields) => {
      console.log(isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }
    const createForm = () => {
      columns.value = [
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
      ]
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
