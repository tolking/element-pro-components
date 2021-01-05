<template>
  <pro-form
    v-model="form"
    :columns="columns"
    label-width="120px"
    size="small"
  >
    <template #date-label>
      <i class="el-icon-time" />
      <span>Date</span>
    </template>
    <template #date="{ item, value, setValue }">
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
    // label: 'Date',
    prop: 'date',
    component: 'el-input',
    slot: true,
  },
  {
    label: 'Name',
    prop: 'name',
    component: 'el-input',
    props: {
      clearable: true,
      placeholder: 'placeholder',
    },
  },
  {
    label: 'Address',
    prop: 'address',
    component: 'pro-input-tag',
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
</script>
