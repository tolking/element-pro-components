<template>
  <pro-search
    v-model="search"
    :columns="columns"
    label-width="100px"
    @submit="submit"
  />
</template>

<script setup lang="ts">
import { markRaw, ref } from 'vue'
import { ElMessage, ElSwitch } from 'element-plus'
import {
  defineSearchColumns,
  defineSearchSubmit,
  defineComponentProps,
} from 'element-pro-components'

interface Search {
  name?: string
  status?: boolean
}

const search = ref<Search>({})
const columns = defineSearchColumns<Search>([
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
const submit = defineSearchSubmit((done, isValid, invalidFields) => {
  ElMessage(`submit: ${isValid}`)
  console.log(search.value, isValid, invalidFields)
  setTimeout(() => {
    done()
  }, 1000)
})
</script>
