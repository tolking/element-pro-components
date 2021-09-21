<template>
  <pro-form
    v-model="form"
    :columns="columns"
    :menu="menu"
    label-width="180px"
    :gutter="20"
    size="small"
    @submit="submitForm"
  >
    <template #slot-label>
      <i class="el-icon-time" />
      <span>Slot</span>
    </template>
    <template #slot="{ item, value, setValue }">
      <span>{{ item }} - {{ value }} - {{ setValue }}</span>
    </template>
  </pro-form>
  <pro-form
    ref="ruleForm"
    v-model="form1"
    :columns="columns1"
    :rules="rules"
    label-width="180px"
    @submit="submitForm"
  >
    <template #address="{ value, setValue }">
      <pro-input-tag
        :model-value="value"
        @update:modelValue="setValue"
      />
    </template>
  </pro-form>
</template>

<script setup lang="ts">
import { h, onMounted, ref, shallowRef } from 'vue'
import { ElSwitch } from 'element-plus'
import type {
  IFormColumns,
  IFormMenuColumns,
  IFormExpose,
  StringObject,
  IFormSubmit,
} from '/@src/index'

interface RuleForm {
  date: string
  user: {
    name: string
    address: string[]
  }[]
}

const form = ref<StringObject>({})
const form1 = ref<RuleForm>({} as RuleForm)
const menu = ref<IFormMenuColumns>({
  submitText: 'Create',
  submitProps: {
    type: 'primary',
    loading: false,
  },
  reset: false,
})
const ruleForm = ref<IFormExpose>({} as IFormExpose)
const rules = ref({
  date: { required: true, message: 'please input data', trigger: 'blur' },
  user: { required: true, message: 'please input user', trigger: 'blur' },
})
const list = [
  { value: 'Go', tag: 'go', disabled: true },
  { value: 'JavaScript', tag: 'javascript' },
  { value: 'Python', tag: 'python' },
]
const treeList = [
  {
    label: '1',
    value: 1,
    disabled: true,
    children: [
      {
        value: 11,
        label: '1-1',
        children: [{ value: '111', label: '1-1-1' }],
      },
    ],
  },
  {
    value: 2,
    label: '2',
    children: [
      {
        value: 21,
        label: '2-1',
        disabled: true,
        children: [{ value: 211, label: '2-1-1' }],
      },
      {
        value: 22,
        label: '2-2',
        children: [{ value: 221, label: '2-2-1', disabled: true }],
      },
    ],
  },
  {
    value: 3,
    label: '3',
    children: [
      {
        value: 31,
        label: '3-1',
        children: [{ value: 311, label: '3-1-1' }],
      },
      {
        value: 32,
        label: '3-2',
        children: [{ value: 321, label: '3-2-1', disabled: true }],
      },
    ],
  },
]
const columns = shallowRef<IFormColumns>([
  {
    // label: 'Slot',
    prop: 'slot',
    component: 'el-input',
  },
  {
    label: 'input',
    prop: 'ninput',
    component: 'input',
    span: 6,
    props: {
      onInput: (e: unknown) => console.log('onInput', e),
      onChange: (e: unknown) => console.log('onChange', e),
    },
  },
  {
    label: 'textarea',
    prop: 'ntextarea',
    component: 'textarea',
    span: 6,
  },
  {
    label: 'radio',
    prop: 'nradio',
    component: 'input',
    span: 4,
    props: {
      type: 'radio',
    },
  },
  {
    label: 'checkbox',
    prop: 'ncheckbox',
    component: 'input',
    span: 4,
    props: {
      type: 'checkbox',
    },
  },
  {
    label: 'color',
    prop: 'ncolor',
    component: 'input',
    span: 4,
    props: {
      type: 'color',
    },
  },
  {
    label: 'el-input',
    prop: 'input',
    component: 'el-input',
    span: 12,
    props: {
      clearable: true,
      placeholder: 'placeholder',
      onInput: (e: unknown) => console.log('onInput', e),
      onChange: (e: unknown) => console.log('onChange', e),
      slots: {
        prefix: () => 'P',
        suffix: h('b', 'suffix'),
      },
    },
  },
  {
    label: 'pro-input-tag',
    prop: 'inputTag',
    component: 'pro-input-tag',
    span: 12,
    props: {
      placeholder: 'Click the space after input',
    },
  },
  {
    label: 'pro-autocomplete-tag',
    prop: 'autocompleteTag',
    component: 'pro-autocomplete-tag',
    span: 8,
    props: {
      fetchSuggestions: querySearch,
      placeholder: 'Click the space after input',
    },
  },
  {
    label: 'pro-radio',
    prop: 'radio',
    component: 'pro-radio',
    span: 8,
    props: {
      data: list,
      config: { label: 'tag' },
    },
  },
  {
    label: 'pro-radio-button',
    prop: 'radioButton',
    component: 'pro-radio-button',
    span: 8,
    props: {
      data: list,
      config: { label: 'tag' },
    },
  },
  {
    label: 'pro-checkbox',
    prop: 'checkbox',
    component: 'pro-checkbox',
    span: 12,
    props: {
      data: list,
      config: { label: 'tag' },
    },
  },
  {
    label: 'pro-checkbox-button',
    prop: 'checkboxButton',
    component: 'pro-checkbox-button',
    xs: { span: 24, offset: 2 },
    sm: { span: 12, pull: 2 },
    md: 12,
    props: {
      data: list,
      config: { label: 'tag' },
    },
  },
  {
    label: 'pro-select',
    prop: 'select',
    component: 'pro-select',
    span: 12,
    props: {
      data: list,
      config: { label: 'tag' },
    },
  },
  {
    label: 'pro-tree-select',
    prop: 'treeSelect',
    component: 'pro-tree-select',
    span: 12,
    props: {
      data: treeList,
      clearable: true,
    },
  },
  {
    label: 'el-switch',
    prop: 'switch',
    component: ElSwitch,
    span: 12,
  },
])
const columns1 = ref<IFormColumns<RuleForm>>([
  {
    label: 'Date',
    prop: 'date',
    component: 'el-input',
    props: {
      onInput: (e: string) => console.log('o--o', e),
    },
  },
  {
    label: 'User',
    prop: 'user',
    // max: 3,
    size: 'mini',
    children: [
      {
        label: 'Name',
        prop: 'name',
        component: 'el-input',
        span: 12,
        rules: {
          required: true,
          message: 'please input name',
          trigger: 'blur',
        },
      },
      {
        label: 'Address',
        prop: 'address',
        span: 12,
      },
    ],
  },
])
const submitForm: IFormSubmit = (done, isValid, invalidFields) => {
  console.log(isValid, invalidFields)
  setTimeout(() => {
    done()
  }, 1000)
}

onMounted(() => {
  console.log(ruleForm.value)
})

function querySearch(queryString: string, cb: (...arg: unknown[]) => void) {
  cb(
    queryString
      ? list.filter((i) => {
          return i.value.indexOf(queryString.toLowerCase()) === 0
        })
      : list
  )
}
</script>
