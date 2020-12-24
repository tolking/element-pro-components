<template>
  <pro-table
    :data="data"
    :columns="columns"
    selection
    index
    @cell-click="test"
  >
    <template #date="{ row }">
      - {{ row.date }} -
    </template>
  </pro-table>
</template>

<script setup lang="ts">
const columns = [
  {
    label: 'Date',
    prop: 'date',
    slot: true,
    sortable: true,
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
const data = [
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

function test(row: unknown) {
  console.log(row)
}
</script>
