<template>
  <pro-table
    :data="data"
    :columns="columns"
    :menu="menu"
  />
</template>

<script setup lang="ts">
import type { ITableColumns, ITableMenuColumns } from '/@src/index'

interface DataItem {
  date: string
  name: string
  address: string
}

const menu: ITableMenuColumns = {
  label: 'Operations',
  align: 'center',
}
const columns: ITableColumns<DataItem> = [
  {
    label: 'Date',
    prop: 'date',
  },
  {
    label: 'Name',
    prop: 'name',
  },
  {
    label: 'Address',
    prop: 'address',
  },
]
const data: DataItem[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
