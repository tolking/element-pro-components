<template>
  <pro-form
    v-model="form"
    :columns="columns"
    label-width="120px"
    size="small"
  >
    <template #slot-label>
      <i class="el-icon-time" />
      <span>Slot</span>
    </template>
    <template #slot="{ item, value, setValue }">
      <span>{{ item }} - {{ value }} - {{ setValue }}</span>
    </template>
    <template #menu>
      <el-button type="primary">
        Submit
      </el-button>
      <el-button>Cancel</el-button>
    </template>
  </pro-form>
  <pro-form
    v-model="form1"
    :columns="columns1"
    label-width="120px"
  >
    <template #address="{ value, setValue }">
      <pro-input-tag
        :model-value="value"
        @update:modelValue="setValue"
      />
    </template>
    <template #menu>
      <el-button type="primary">
        Submit
      </el-button>
      <el-button>Cancel</el-button>
    </template>
  </pro-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref<Record<string, unknown>>({})
const form1 = ref<Record<string, unknown>>({})
const columns = [
  {
    // label: 'Slot',
    prop: 'slot',
    component: 'el-input',
    slot: true,
  },
  {
    label: 'el-input',
    prop: 'input',
    component: 'el-input',
    props: {
      clearable: true,
      placeholder: 'placeholder',
    },
  },
  {
    label: 'pro-input-tag',
    prop: 'inputTag',
    component: 'pro-input-tag',
    props: {
      autocomplete: true,
      fetchSuggestions: querySearch,
      placeholder: 'Click the space after input',
    },
  },
]
const columns1 = [
  {
    label: 'Date',
    prop: 'date',
    component: 'el-input',
  },
  {
    label: 'User',
    prop: 'user',
    // max: 3,
    children: [
      {
        label: 'Name',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: 'Address',
        prop: 'address',
        component: 'el-input',
        slot: true,
      },
    ],
  },
]
const list = [
  { value: 'Go', tag: 'go' },
  { value: 'JavaScript', tag: 'javascript' },
  { value: 'Python', tag: 'python' },
]

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
