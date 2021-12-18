<template>
  <pro-descriptions
    :columns="columns"
    :detail="detail"
  />
</template>

<script setup lang="ts">
import { defineDescriptionsColumns } from 'element-pro-components'

interface DescriptionsItem {
  date: string
  name: string
  address: string
}

const columns = defineDescriptionsColumns<DescriptionsItem>([
  { label: 'Date', prop: 'date' },
  { label: 'Name', prop: 'name' },
  { label: 'Address', prop: 'address' },
])
const detail: DescriptionsItem = {
  date: '2016-05-03',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
</script>
