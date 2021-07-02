<template>
  <p>{{ text }}</p>
  <pro-tree-select
    v-model="value"
    :data="data"
    clearable
    show-checkbox
    placeholder="树形选择器"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('Layout')
const value = ref('')
const data = [
  {
    label: '1',
    value: 1,
    children: [
      {
        value: 11,
        label: '1-1',
        children: [
          {
            value: 111,
            label: '1-1-1',
          },
        ],
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
        children: [
          {
            value: 211,
            label: '2-1-1',
          },
        ],
      },
      {
        value: 22,
        label: '2-2',
        children: [
          {
            value: 221,
            label: '2-2-1',
          },
        ],
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
        children: [
          {
            value: 311,
            label: '3-1-1',
          },
        ],
      },
      {
        value: 32,
        label: '3-2',
        children: [
          {
            value: 321,
            label: '3-2-1',
          },
        ],
      },
    ],
  },
]
</script>
