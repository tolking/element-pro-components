<template>
  <pro-form
    v-model="form"
    :columns="columns"
    :menu="menu"
    label-width="100px"
  >
    <template #menu-left>
      <el-button
        v-show="columns.length < 5"
        @click="add"
      >
        Add One
      </el-button>
    </template>
    <template #menu-right>
      <el-button
        v-show="columns.length"
        @click="del"
      >
        Delete One
      </el-button>
    </template>
  </pro-form>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const menu = {
      submit: false,
      reset: false,
    }
    const count = ref(0)
    const form = ref({})
    const columns = ref([
      {
        label: 'Label-0',
        prop: 'prop0',
        component: 'el-input',
      },
    ])

    function add() {
      count.value++
      columns.value.push({
        label: 'Label-' + count.value,
        prop: 'prop' + count.value,
        component: 'el-input',
      })
    }

    function del() {
      const index = Math.floor(Math.random() * columns.value.length)
      columns.value.splice(index, 1)
    }

    return {
      menu,
      form,
      columns,
      add,
      del,
    }
  },
})
</script>
