<template>
  <pro-form
    v-model="form"
    :columns="columns"
    label-width="100px"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const form = ref({})
    const columns = [
      {
        label: 'Goods',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: 'Spec',
        prop: 'spec',
        size: 'small',
        max: 3,
        children: [
          {
            label: 'Weight',
            prop: 'weight',
            component: 'el-input',
          },
          {
            label: 'Size',
            prop: 'size',
            max: 1,
            children: [
              {
                label: 'Length',
                prop: 'length',
                component: 'el-input',
              },
              {
                label: 'Width',
                prop: 'width',
                component: 'el-input',
              },
              {
                label: 'Height',
                prop: 'height',
                component: 'el-input',
              },
            ],
          },
        ],
      },
    ]

    return {
      form,
      columns,
    }
  },
})
</script>
