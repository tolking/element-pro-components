<template>
  <pro-search
    v-model="search"
    :columns="columns"
    label-width="100px"
    @submit="submit"
  >
    <template #menu-right>
      <el-button>menu-right</el-button>
    </template>
    <template #search-slot-label>
      <span>name</span>
    </template>
    <template #search-slot="{ value, setValue }">
      <el-input :value="value" @change="setValue">
        <template #prefix>
          <el-icon>
            <element-plus />
          </el-icon>
        </template>
      </el-input>
    </template>
  </pro-search>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { ElementPlus } from '@element-plus/icons-vue'
import { defineFormColumns, defineFormSubmit } from 'element-pro-components'

export default defineComponent({
  components: { ElementPlus },
  setup() {
    const search = ref({})
    const columns = defineFormColumns([
      {
        prop: 'slot',
      },
    ])
    const submit = defineFormSubmit((done, isValid, invalidFields) => {
      ElMessage(`submit: ${isValid}`)
      console.log(search.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    return {
      search,
      columns,
      submit,
    }
  },
})
</script>
