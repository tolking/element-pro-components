<template>
  <el-button
    type="primary"
    style="margin-bottom: 20px"
    @click="toggleLocale"
  >
    Switch lang
  </el-button>
  <el-config-provider :locale="toggle ? locale1 : locale2">
    <pro-form
      v-model="form"
      :columns="columns"
      label-width="100px"
      @submit="submit"
    />
  </el-config-provider>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const form = ref({})
    const columns = ref([
      {
        label: 'Name',
        prop: 'name',
        component: 'el-input',
      },
    ])
    const toggle = ref(true)
    const locale1 = {
      name: 'en',
      pro: {
        form: {
          submit: 'Submit',
          reset: 'Reset',
        },
      },
    }
    const locale2 = {
      name: 'zh-cn',
      pro: {
        form: {
          submit: '提 交',
          reset: '重 置',
        },
      },
    }
    const submit = (done, isValid, invalidFields) => {
      console.log(form.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }
    const toggleLocale = () => {
      toggle.value = !toggle.value
    }

    return {
      form,
      columns,
      toggle,
      locale1,
      locale2,
      submit,
      toggleLocale,
    }
  },
})
</script>
