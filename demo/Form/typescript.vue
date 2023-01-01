<template>
  <pro-form
    v-model="form"
    :columns="columns"
    label-width="100px"
    @submit="submit"
  />
</template>

<script setup lang="ts">
import { markRaw, ref } from 'vue'
import { ElMessage, ElSwitch } from 'element-plus'
import {
  defineFormColumns,
  defineFormSubmit,
  defineComponentProps,
} from 'element-pro-components'

interface Form {
  name?: string
  status?: boolean
}

const form = ref<Form>({})
const columns = defineFormColumns<Form>([
  {
    label: 'Name',
    prop: 'name',
    component: 'ElInput',
    props: defineComponentProps<'ElInput'>({
      clearable: true,
      placeholder: 'Please input your name',
      slots: {
        append: () => 'Search',
      },
    }),
  },
  {
    label: 'Status',
    prop: 'status',
    component: markRaw(ElSwitch),
    props: defineComponentProps<typeof ElSwitch>({
      inlinePrompt: true,
      activeText: 'Y',
      inactiveText: 'N',
    }),
  },
])
const submit = defineFormSubmit((done, isValid, invalidFields) => {
  ElMessage(`submit: ${isValid}`)
  console.log(form.value, isValid, invalidFields)
  setTimeout(() => {
    done()
  }, 1000)
})
</script>
