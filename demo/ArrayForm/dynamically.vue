<template>
  <pro-array-form
    v-model="form"
    :columns="columns"
    :menu="menu"
    label-width="100px"
    @submit="submit"
  >
    <template #menu-left>
      <el-button
        v-show="columns.length < 5"
        @click="add"
      >
        Add One
      </el-button>
    </template>
    <template #menu-right>
      <el-button
        v-show="columns.length"
        @click="del"
      >
        Delete One
      </el-button>
    </template>
  </pro-array-form>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import {
  defineFormColumns,
  defineFormMenuColumns,
  defineFormSubmit,
} from 'element-pro-components'

export default defineComponent({
  setup() {
    const menu = defineFormMenuColumns({
      submit: false,
      reset: false,
    })
    const count = ref(0)
    const form = ref([{}])
    const columns = ref(
      defineFormColumns([
        {
          label: 'Label-0',
          prop: 'prop0',
          component: 'el-input',
        },
      ])
    )
    const submit = defineFormSubmit((done, isValid, invalidFields) => {
      ElMessage(`submit: ${isValid}`)
      console.log(form.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    function add() {
      count.value++
      columns.value.push({
        label: 'Label-' + count.value,
        prop: 'prop' + count.value,
        component: 'el-input',
      })
    }

    function del() {
      const index = Math.floor(Math.random() * columns.value.length)
      columns.value.splice(index, 1)
    }

    return {
      menu,
      form,
      columns,
      submit,
      add,
      del,
    }
  },
})
</script>
