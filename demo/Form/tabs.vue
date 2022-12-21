<template>
  <pro-form
    ref="formRef"
    v-model="form"
    :columns="columns"
    :rules="rules"
    label-position="top"
    class="docs-tabs-form"
    @submit="submit"
    @tab-change="tabChange"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { defineFormColumns, defineFormSubmit } from 'element-pro-components'

export default defineComponent({
  setup() {
    const loginRules = {
      username: {
        required: true,
        message: 'Please input name',
        trigger: 'blur',
      },
      password: {
        required: true,
        message: 'Please input password',
        trigger: 'blur',
      },
    }
    const registerRules = {
      name: { required: true, message: 'Please input name', trigger: 'blur' },
      email: { required: true, message: 'Please input email', trigger: 'blur' },
      password: {
        required: true,
        message: 'Please input password',
        trigger: 'blur',
      },
    }

    const form = ref({})
    const formRef = ref()
    const rules = ref(loginRules)

    const columns = defineFormColumns([
      {
        label: 'Sign in',
        prop: 'login',
        type: 'tabs',
        children: [
          {
            label: 'Name',
            prop: 'username',
            component: 'el-input',
            props: {
              clearable: true,
              placeholder: 'Please input name',
            },
          },
          {
            label: 'Password',
            prop: 'password',
            component: 'el-input',
            props: {
              type: 'password',
              clearable: true,
              showPassword: true,
              placeholder: 'Please input password',
            },
          },
        ],
      },
      {
        label: 'Sign up',
        prop: 'register',
        type: 'tabs',
        children: [
          {
            label: 'Name',
            prop: 'name',
            component: 'el-input',
            props: {
              clearable: true,
              placeholder: 'Please input name',
            },
          },
          {
            label: 'Email',
            prop: 'email',
            component: 'el-input',
            props: {
              clearable: true,
              placeholder: 'Please input email',
            },
          },
          {
            label: 'Password',
            prop: 'password',
            component: 'el-input',
            props: {
              clearable: true,
              placeholder: 'Please input password',
            },
          },
        ],
      },
    ])

    const submit = defineFormSubmit((done, isValid, invalidFields) => {
      ElMessage(`submit: ${isValid}`)
      console.log(form.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    const tabChange = (prop) => {
      rules.value = prop === 'login' ? loginRules : registerRules
      setTimeout(() => {
        formRef.value.resetFields()
      })
    }

    return {
      form,
      formRef,
      columns,
      rules,
      submit,
      tabChange,
    }
  },
})
</script>

<style scoped>
.docs-tabs-form {
  margin: 0 auto;
  width: 50%;
  min-width: 300px;
  max-width: 500px;
}
.docs-tabs-form :deep(.pro-tabs-form .el-tabs__header) {
  text-align: center;
}
.docs-tabs-form :deep(.pro-tabs-form .el-tabs__header .el-tabs__nav-wrap) {
  --el-font-size-base: 20px;
  display: inline-block;
}
</style>
