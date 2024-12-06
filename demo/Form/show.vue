<template>
  <pro-form
    v-model="form"
    :columns="columns"
    label-width="100px"
    @submit="submit"
  />
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { defineFormColumns, defineFormSubmit } from 'element-pro-components'

export default defineComponent({
  setup() {
    const form = ref({})
    const columns = computed(() =>
      defineFormColumns([
        {
          label: 'Plan',
          prop: 'plan',
          component: 'pro-radio',
          rules: {
            required: true,
            message: 'Please select a plan',
            trigger: 'blue',
          },
          props: {
            data: [
              { label: 'Basic', value: 'basic' },
              { label: 'Pro', value: 'pro' },
            ],
          },
        },
        {
          label: 'Name',
          prop: 'name',
          component: 'el-input',
          show: !!form.value.plan,
        },
        getContentColumn(form.value.plan === 'basic'),
        {
          label: 'List',
          prop: 'list',
          max: 5,
          show: form.value.plan === 'pro',
          children: [
            {
              label: 'Date',
              prop: 'date',
              component: 'el-date-picker',
            },
            getContentColumn(form.value.plan === 'pro'),
          ],
        },
      ]),
    )
    const submit = defineFormSubmit((done, isValid, invalidFields) => {
      ElMessage(`submit: ${isValid}`)
      console.log(form.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    function getContentColumn(show) {
      return {
        label: 'Content',
        prop: 'content',
        component: 'el-input',
        show,
        props: {
          type: 'textarea',
          rows: 2,
        },
      }
    }

    return {
      form,
      columns,
      submit,
    }
  },
})
</script>
