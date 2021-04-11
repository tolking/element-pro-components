# Crud

> Crud is a multifunctional business component based on Table and Form

# Use

## Basic Use

::: demo 传入 columns 数据，根据 `add` `edit` `form` `hide` `search` 自动生成多功能表格

<template>
  <pro-crud
    v-model="form"
    v-model:search="serachForm"
    :columns="columns"
    :menu="{ label: '操作' }"
    :data="data"
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form = ref({})
    const serachForm = ref({})
    const columns = ref([
      {
        label: '日期',
        prop: 'date',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
      },
      {
        label: '姓名',
        prop: 'name',
        component: 'el-input',
        add: true,
        search: true,
      },
      {
        label: '地址',
        prop: 'address',
        component: 'el-input',
        add: true,
        edit: true,
      },
    ])
    const data = ref([
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
    ])

    const search = (done, isValid, invalidFields) => {
      console.log('search', isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    const submit = (close, done, formType, isValid, invalidFields) => {
      console.log('submit', formType, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }

    const deleteRow = (row) => {
      console.log('deleteRow', row)
    }

    return {
      form,
      serachForm,
      data,
      columns,
      search,
      submit,
      deleteRow,
    }
  }
}
</script>

:::

### 配置按钮

::: demo 默认不显示新增、编辑、删除按钮，需要通过 `menu` 传入 `true` 或者 menu 的相关配置才会显示

<template>
  <pro-crud
    v-model="form1"
    v-model:search="serachForm1"
    :columns="columns1"
    :menu="menu"
    :data="data"
    @search="search"
    @searchReset="reset"
    @submit="submit"
    @reset="reset"
    @delete="deleteRow"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const menu = ref({
      label: '操作',
      addText: '新增',
      editText: '修改',
      delText: '删除',
      searchText: '搜索',
      searchResetText: '重置',
      submitText: '提交',
      resetText: '重置',
      edit: (row) => row.date !== '2016-05-02',
      del: (row) => row.date !== '2016-05-04',
      searchReset: false,
      editProps: { type: 'default', plain: true },
      delProps: { type: 'danger', plain: true },
    })
    const form1 = ref({})
    const serachForm1 = ref({})
    const columns1 = ref([
      {
        label: '日期',
        prop: 'date',
        component: 'el-input',
        form: true,
      },
      {
        label: '姓名',
        prop: 'name',
        component: 'el-input',
        form: true,
        search: true,
      },
      {
        label: '地址',
        prop: 'address',
        component: 'el-input',
        form: true,
      },
    ])
    const data = ref([
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
    ])

    const search = (done, isValid, invalidFields) => {
      console.log('search', isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    const submit = (close, done, formType, isValid, invalidFields) => {
      console.log('submit', formType, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }

    const reset = () => {
      console.log('reset')
    }

    const deleteRow = (row) => {
      console.log('deleteRow', row)
    }

    return {
      form1,
      serachForm1,
      columns,
      menu,
      data,
      search,
      submit,
      reset,
      deleteRow,
    }
  }
}
</script>

:::

### 指定搜索表单

::: demo 通过 `form-columns` 传入的配置直接作用于搜索表单，类型同 Form columns

<template>
  <pro-crud
    v-model:search="serachForm2"
    :columns="columns2"
    :search-columns="searchColumns"
    @search="search"
    @searchReset="reset"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const serachForm2 = ref({})
    const columns2 = ref([
      {
        label: '日期',
        prop: 'date',
      },
      {
        label: '姓名',
        prop: 'name',
      },
      {
        label: '地址',
        prop: 'address',
      },
    ])
    const searchColumns = ref([
      {
        label: '姓名',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: '日期',
        prop: 'date',
        component: 'el-date-picker',
        props: {
          type: 'datetimerange',
          rangeSeparator: '至',
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
        }
      }
    ])

    const search = (done, isValid, invalidFields) => {
      console.log('search', isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    const reset = () => {
      console.log('reset search')
    }

    return {
      serachForm2,
      columns1,
      search,
      reset,
    }
  }
}
</script>

:::

### 指定新增表单

::: demo 通过 `add-columns` 传入的配置直接作用于新增表单，类型同 Form columns

<template>
  <pro-crud
    v-model="form3"
    :columns="columns2"
    :add-columns="addColumns"
    :menu="true"
    label-width="100px"
    @submit="submit"
    @reset="reset"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form3 = ref({})
    const columns2 = ref([
      {
        label: '日期',
        prop: 'date',
      },
      {
        label: '姓名',
        prop: 'name',
      },
      {
        label: '地址',
        prop: 'address',
      },
    ])
    const addColumns = ref([
      {
        label: '姓名',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: '日期',
        prop: 'date',
        component: 'el-date-picker',
        props: {
          type: 'datetimerange',
          rangeSeparator: '至',
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
        }
      }
    ])

    const submit = (close, done, formType, isValid, invalidFields) => {
      console.log('submit', formType, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }

    const reset = () => {
      console.log('reset')
    }

    return {
      form3,
      columns2,
      addColumns,
      submit,
      reset,
    }
  }
}
</script>

:::

### 指定编辑表单

::: demo 通过 `edit-columns` 传入的配置直接作用于新增表单，类型同 Form columns

<template>
  <pro-crud
    v-model="form4"
    :columns="columns4"
    :edit-columns="editColumns"
    :menu="true"
    :data="data"
    label-width="100px"
    @submit="submit"
    @reset="reset"
    @delete="deleteRow"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form4 = ref({})
    const columns4 = ref([
      {
        label: '日期',
        prop: 'date',
        component: 'el-input',
        add: true,
      },
      {
        label: '姓名',
        prop: 'name',
      },
      {
        label: '地址',
        prop: 'address',
      },
    ])
    const editColumns = ref([
      {
        label: '姓名',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: '日期',
        prop: 'date',
        component: 'el-date-picker',
        props: {
          type: 'datetimerange',
          rangeSeparator: '至',
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
        }
      }
    ])
    const data = ref([
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
    ])

    const submit = (close, done, formType, isValid, invalidFields) => {
      console.log('submit', formType, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }

    const reset = () => {
      console.log('reset')
    }

    const deleteRow = (row) => {
      console.log('deleteRow', row)
    }

    return {
      form4,
      columns4,
      editColumns,
      data,
      submit,
      reset,
      deleteRow,
    }
  }
}
</script>

:::

### 指定表单

::: demo 通过 `form-columns` 传入的配置直接作用于新增和编辑表单，类型同 Form columns

<template>
  <pro-crud
    v-model="form5"
    :columns="columns2"
    :form-columns="formColumns"
    :menu="true"
    :data="data"
    label-width="100px"
    @submit="submit"
    @reset="reset"
    @delete="deleteRow"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form5 = ref({})
    const columns2 = ref([
      {
        label: '日期',
        prop: 'date',
      },
      {
        label: '姓名',
        prop: 'name',
      },
      {
        label: '地址',
        prop: 'address',
      },
    ])
    const formColumns = ref([
      {
        label: '姓名',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: '日期',
        prop: 'date',
        component: 'el-date-picker',
        props: {
          type: 'datetimerange',
          rangeSeparator: '至',
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
        }
      }
    ])
    const data = ref([
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
    ])

    const submit = (close, done, formType, isValid, invalidFields) => {
      console.log('submit', formType, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }

    const reset = () => {
      console.log('reset')
    }

    const deleteRow = (row) => {
      console.log('deleteRow', row)
    }

    return {
      form5,
      columns2,
      formColumns,
      data,
      submit,
      reset,
      deleteRow,
    }
  }
}
</script>

:::

### 指定表格

::: demo 通过 `table-columns` 传入的配置直接作用于表格，类型同 Table columns

<template>
  <pro-crud
    v-model="form6"
    v-model:search="serachForm6"
    :columns="columns6"
    :table-columns="tableColumns"
    :menu="{ label: '操作' }"
    :data="data"
    label-width="100px"
    @submit="submit"
    @reset="reset"
    @delete="deleteRow"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form6 = ref({})
    const serachForm6 = ref({})
    const columns6 = ref([
      {
        label: '日期',
        prop: 'date',
        component: 'el-input',
        form: true,
      },
      {
        label: '姓名',
        prop: 'name',
        component: 'el-input',
        form: true,
        search: true,
      },
      {
        label: '地址',
        prop: 'address',
        component: 'el-input',
      },
    ])
    const tableColumns = ref([
      {
        label: '日期',
        prop: 'date',
      },
      {
        label: '用户',
        children: [
          {
            label: '姓名',
            prop: 'name',
          },
          {
            label: '地址',
            prop: 'address',
          },
        ],
      },
    ])
    const data = ref([
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
    ])

    const submit = (close, done, formType, isValid, invalidFields) => {
      console.log('submit', formType, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }

    const reset = () => {
      console.log('reset')
    }

    const deleteRow = (row) => {
      console.log('deleteRow', row)
    }

    return {
      form6,
      serachForm6,
      columns6,
      tableColumns,
      data,
      submit,
      reset,
      deleteRow,
    }
  }
}
</script>

:::

### 弹窗前后

::: demo 通过 `before-open` `before-close` 指定弹窗开启前与弹窗关闭前执行的操作

<template>
  <pro-crud
    v-model="form7"
    :columns="columns7"
    :menu="{ label: '操作' }"
    :data="data"
    :before-open="beforeOpen"
    :before-close="beforeClose"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form7 = ref({})
    const columns7 = ref([
      {
        label: '日期',
        prop: 'date',
        component: 'el-input',
        form: true,
      },
      {
        label: '姓名',
        prop: 'name',
      },
      {
        label: '地址',
        prop: 'address',
      },
    ])
    const data = ref([
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
    ])

    function beforeOpen(done, type, row) {
      console.log('beforeOpen', type, row)
      setTimeout(() => {
        done()
      }, 1000)
    }

    function beforeClose(done) {
      console.log('beforeClose')
      setTimeout(() => {
        done()
      }, 1000)
    }

    return {
      form7,
      columns7,
      data,
      beforeOpen,
      beforeClose,
    }
  }
}
</script>

:::

### Slots

::: demo 通过 columns 的 slot 配置是否开启自定义插槽功能。开启后可以使用带 `[prop]` 相关的插槽，否则只有不带 `[prop]` 的插槽生效

<template>
  <pro-crud
    v-model="form8"
    v-model:search="serachForm8"
    :columns="columns"
    :menu="{ label: '操作' }"
    :data="data"
    selection
    @search="search"
    @submit="submit"
    @delete="deleteRow"
  >
    <template #menu-right="{ size }">
      <el-button
        :size="size"
        type="danger"
      >
        删除
      </el-button>
    </template>
    <template #menu="{ size }">
      <el-button
        :size="size"
        type="text"
      >
        详情
      </el-button>
    </template>
    <template #form-name>
      <span>form slot</span>
    </template>
    <template #table-name="{ row, size }">
      <el-tag :size="size">
        {{ row?.name }}
      </el-tag>
    </template>
    <template #name-header="{ column }">
      <s>{{ column.label }}</s>
    </template>
  </pro-crud>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form8 = ref({})
    const serachForm8 = ref({})
    const columns = ref([
      {
        label: '日期',
        prop: 'date',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
      },
      {
        label: '姓名',
        prop: 'name',
        component: 'el-input',
        add: true,
        search: true,
        slot: true,
      },
      {
        label: '地址',
        prop: 'address',
        component: 'el-input',
        add: true,
        edit: true,
      },
    ])
    const data = ref([
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
    ])

    const search = (done, isValid, invalidFields) => {
      console.log('search', isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    const submit = (close, done, formType, isValid, invalidFields) => {
      console.log('submit', formType, isValid, invalidFields)
      setTimeout(() => {
        isValid ? close() : done()
      }, 1000)
    }

    const deleteRow = (row) => {
      console.log('deleteRow', row)
    }

    return {
      form8,
      serachForm8,
      data,
      columns,
      search,
      submit,
      deleteRow,
    }
  }
}
</script>

:::

### Props

| Name                    | Description                                                                                                                                                                                                                                                                 | Type                                                    | Options                                             | Default                                                                        |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------ | :-------------------------------------------------- | :----------------------------------------------------------------------------- | ---- |
| v-model                 | binding value                                                                                                                                                                                                                                                               | object                                                  | -                                                   | -                                                                              |
| v-model:search          | binding search value                                                                                                                                                                                                                                                        | object                                                  | -                                                   | -                                                                              |
| columns                 | to generate crud components, reference `columns`                                                                                                                                                                                                                            | array                                                   | -                                                   | -                                                                              |
| add-columns             | to generate add form components, reference `columns`                                                                                                                                                                                                                        | array                                                   | -                                                   | from `columns`                                                                 |
| edit-columns            | to generate edit form components, reference `columns`                                                                                                                                                                                                                       | array                                                   | -                                                   | from `columns`                                                                 |
| form-columns            | to generate form components, reference `columns`                                                                                                                                                                                                                            | array                                                   | -                                                   | from `columns`                                                                 |
| search-columns          | to generate search components, reference `columns`                                                                                                                                                                                                                          | array                                                   | -                                                   | from `columns`                                                                 |
| table-columns           | to generate table components, reference `columns`                                                                                                                                                                                                                           | array                                                   | -                                                   | from `columns`                                                                 |
| menu                    | config the menu content, reference `menu`                                                                                                                                                                                                                                   | object                                                  | -                                                   | -                                                                              |
| search-rules            | validation rules of search                                                                                                                                                                                                                                                  | object                                                  | -                                                   | -                                                                              |
| data                    | Table data                                                                                                                                                                                                                                                                  | array                                                   | —                                                   | —                                                                              |
| selection               | add a column will display checkbox, reference `columns`                                                                                                                                                                                                                     | boolean / object                                        | -                                                   | false                                                                          |
| index                   | add a column will display index, reference columns                                                                                                                                                                                                                          | boolean / object                                        | -                                                   | false                                                                          |
| expand                  | add a column will display expand icon, reference columns                                                                                                                                                                                                                    | boolean / object                                        | -                                                   | false                                                                          |
| menu                    | config the menu content, reference columns                                                                                                                                                                                                                                  | boolean / object                                        | -                                                   | false                                                                          |
| show-overflow-tooltip   | whether to hide extra content and show them in a tooltip when hovering on the cell                                                                                                                                                                                          | boolean                                                 | -                                                   | false                                                                          |
| align                   | alignment                                                                                                                                                                                                                                                                   | string                                                  | left / center / right                               | left                                                                           |
| header-align            | alignment of the table header. If omitted, the value of the above `align` attribute will be applied                                                                                                                                                                         | string                                                  | left / center / right                               | same with align                                                                |
| total                   | total item count                                                                                                                                                                                                                                                            | number                                                  | -                                                   | -                                                                              |
| current-page            | current page number, supports `v-model:current-page`                                                                                                                                                                                                                        | number                                                  | -                                                   | -                                                                              |
| page-size               | item count of each page, supports `v-model:page-size`                                                                                                                                                                                                                       | number                                                  | -                                                   | -                                                                              |
| pagination              | pagination props, same with el-pagination                                                                                                                                                                                                                                   | object                                                  | -                                                   | [reference](../guide/index#全局配置)                                           |
| height                  | Table's height. By default it has an `auto` height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles                                   | string / number                                         | —                                                   | —                                                                              |
| max-height              | Table's max-height. The legal value is a number or the height in px.                                                                                                                                                                                                        | string/number                                           | —                                                   | —                                                                              |
| stripe                  | whether Table is striped                                                                                                                                                                                                                                                    | boolean                                                 | —                                                   | false                                                                          |
| border                  | whether Table has vertical border                                                                                                                                                                                                                                           | boolean                                                 | —                                                   | false                                                                          |
| size                    | size of Table                                                                                                                                                                                                                                                               | string                                                  | medium / small / mini                               | —                                                                              |
| fit                     | whether width of column automatically fits its container                                                                                                                                                                                                                    | boolean                                                 | —                                                   | true                                                                           |
| show-header             | whether Table header is visible                                                                                                                                                                                                                                             | boolean                                                 | —                                                   | true                                                                           |
| highlight-current-row   | whether current row is highlighted                                                                                                                                                                                                                                          | boolean                                                 | —                                                   | false                                                                          |
| current-row-key         | key of current row, a set only prop                                                                                                                                                                                                                                         | string,number                                           | —                                                   | —                                                                              |
| row-class-name          | function that returns custom class names for a row, or a string assigning class names for every row                                                                                                                                                                         | Function({row, rowIndex}) / string                      | —                                                   | —                                                                              |
| row-style               | function that returns custom style for a row, or an object assigning custom style for every row                                                                                                                                                                             | Function({row, rowIndex}) / Object                      | —                                                   | —                                                                              |
| cell-class-name         | function that returns custom class names for a cell, or a string assigning class names for every cell                                                                                                                                                                       | Function({row, column, rowIndex, columnIndex}) / string | —                                                   | —                                                                              |
| cell-style              | function that returns custom style for a cell, or an object assigning custom style for every cell                                                                                                                                                                           | Function({row, column, rowIndex, columnIndex}) / Object | —                                                   | —                                                                              |
| header-row-class-name   | function that returns custom class names for a row in table header, or a string assigning class names for every row in table header                                                                                                                                         | Function({row, rowIndex}) / string                      | —                                                   | —                                                                              |
| header-row-style        | function that returns custom style for a row in table header, or an object assigning custom style for every row in table header                                                                                                                                             | Function({row, rowIndex}) / Object                      | —                                                   | —                                                                              |
| header-cell-class-name  | function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header                                                                                                                                       | Function({row, column, rowIndex, columnIndex}) / string | —                                                   | —                                                                              |
| header-cell-style       | function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header                                                                                                                                           | Function({row, column, rowIndex, columnIndex}) / Object | —                                                   | —                                                                              |
| row-key                 | key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used. | Function(row) / string                                  | —                                                   | —                                                                              |
| empty-text              | Displayed text when data is empty. You can customize this area with `#empty`                                                                                                                                                                                                | String                                                  | —                                                   | No Data                                                                        |
| default-expand-all      | whether expand all rows by default, works when the table has a column type="expand" or contains tree structure data                                                                                                                                                         | Boolean                                                 | —                                                   | false                                                                          |
| expand-row-keys         | set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop                                                                                                                                                      | Array                                                   | —                                                   |                                                                                |
| default-sort            | set the default sort column and order. property `prop` is used to set default sort column, property `order` is used to set default sort order                                                                                                                               | Object                                                  | `order`: ascending, descending                      | if `prop` is set, and `order` is not set, then `order` is default to ascending |
| tooltip-effect          | tooltip `effect` property                                                                                                                                                                                                                                                   | String                                                  | dark / light                                        |                                                                                | dark |
| show-summary            | whether to display a summary row                                                                                                                                                                                                                                            | Boolean                                                 | —                                                   | false                                                                          |
| sum-text                | displayed text for the first column of summary row                                                                                                                                                                                                                          | String                                                  | —                                                   | Sum                                                                            |
| summary-method          | custom summary method                                                                                                                                                                                                                                                       | Function({ columns, data })                             | —                                                   | —                                                                              |
| span-method             | method that returns rowspan and colspan                                                                                                                                                                                                                                     | Function({ row, column, rowIndex, columnIndex })        | —                                                   | —                                                                              |
| select-on-indeterminate | controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected.                                                                                                        | Boolean                                                 | —                                                   | true                                                                           |
| indent                  | horizontal indentation of tree data                                                                                                                                                                                                                                         | Number                                                  | —                                                   | 16                                                                             |
| lazy                    | whether to lazy loading data                                                                                                                                                                                                                                                | Boolean                                                 | —                                                   | —                                                                              |
| load                    | method for loading child row data, only works when `lazy` is true                                                                                                                                                                                                           | Function(row, treeNode, resolve)                        | —                                                   | —                                                                              |
| tree-props              | configuration for rendering nested data                                                                                                                                                                                                                                     | Object                                                  | —                                                   | { hasChildren: 'hasChildren', children: 'children' }                           |
| rules                   | validation rules of form                                                                                                                                                                                                                                                    | object                                                  | -                                                   | -                                                                              |
| inline                  | whether the form is inline                                                                                                                                                                                                                                                  | boolean                                                 | -                                                   | false                                                                          |
| label-position          | position of label. If set to 'left' or 'right', `label-width` prop is also required                                                                                                                                                                                         | string                                                  | right / left / top                                  | right                                                                          |
| label-width             | width of label, e.g. '50px'. All its direct child form items will inherit this value. Width `auto` is supported.                                                                                                                                                            | string                                                  | —                                                   | —                                                                              |
| label-suffix            | suffix of the label                                                                                                                                                                                                                                                         | string                                                  | —                                                   | —                                                                              |
| hide-required-asterisk  | whether required fields should have a red asterisk (star) beside their labels                                                                                                                                                                                               | boolean                                                 | —                                                   | false                                                                          |
| show-message            | whether to show the error message                                                                                                                                                                                                                                           | boolean                                                 | —                                                   | true                                                                           |
| inline-message          | whether to display the error message inline with the form item                                                                                                                                                                                                              | boolean                                                 | —                                                   | false                                                                          |
| status-icon             | whether to display an icon indicating the validation result                                                                                                                                                                                                                 | boolean                                                 | —                                                   | false                                                                          |
| validate-on-rule-change | whether to trigger validation when the `rules` prop is changed                                                                                                                                                                                                              | boolean                                                 | —                                                   | true                                                                           |
| size                    | control the size of components in this form                                                                                                                                                                                                                                 | string                                                  | medium / small / mini                               | —                                                                              |
| disabled                | whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components' `disabled` prop                                                                                                                                           | boolean                                                 | —                                                   | false                                                                          |
| gutter                  | grid spacing                                                                                                                                                                                                                                                                | number                                                  | —                                                   | 0                                                                              |
| type                    | layout mode, you can use flex, works in modern browsers                                                                                                                                                                                                                     | string                                                  | —                                                   | —                                                                              |
| justify                 | horizontal alignment of flex layout                                                                                                                                                                                                                                         | string                                                  | start / end / center / space-around / space-between | start                                                                          |
| title                   | title of Dialog. Can also be passed with a named slot (see the following table)                                                                                                                                                                                             | string                                                  | —                                                   | reference `addText` or `editText` of menu                                      |
| width                   | width of Dialog                                                                                                                                                                                                                                                             | string / number                                         | —                                                   | 50%                                                                            |
| fullscreen              | whether the Dialog takes up full screen                                                                                                                                                                                                                                     | boolean                                                 | —                                                   | false                                                                          |
| top                     | value for `margin-top` of Dialog CSS                                                                                                                                                                                                                                        | string                                                  | —                                                   | 15vh                                                                           |
| modal                   | whether a mask is displayed                                                                                                                                                                                                                                                 | boolean                                                 | —                                                   | true                                                                           |
| append-to-body          | whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true`                                                                                                                                                                           | boolean                                                 | —                                                   | false                                                                          |
| lock-scroll             | whether scroll of body is disabled while Dialog is displayed                                                                                                                                                                                                                | boolean                                                 | —                                                   | true                                                                           |
| custom-class            | custom class names for Dialog                                                                                                                                                                                                                                               | string                                                  | —                                                   | —                                                                              |
| open-delay              | Time(milliseconds) before open                                                                                                                                                                                                                                              | number                                                  | —                                                   | 0                                                                              |
| close-delay             | Time(milliseconds) before close                                                                                                                                                                                                                                             | number                                                  | —                                                   | 0                                                                              |
| close-on-click-modal    | whether the Dialog can be closed by clicking the mask                                                                                                                                                                                                                       | boolean                                                 | —                                                   | true                                                                           |
| close-on-press-escape   | whether the Dialog can be closed by pressing ESC                                                                                                                                                                                                                            | boolean                                                 | —                                                   | true                                                                           |
| show-close              | whether to show a close button                                                                                                                                                                                                                                              | boolean                                                 | —                                                   | true                                                                           |
| before-close            | callback before Dialog closes, and it will prevent Dialog from closing                                                                                                                                                                                                      | function(done)，done is used to close the Dialog        | —                                                   | —                                                                              |
| center                  | whether to align the header and footer in center                                                                                                                                                                                                                            | boolean                                                 | —                                                   | false                                                                          |
| destroy-on-close        | Destroy elements in Dialog when closed                                                                                                                                                                                                                                      | boolean                                                 | —                                                   | false                                                                          |

#### columns

| Name                | Description                                                                                                                                                                                                     | Type                                        | Options                                                                                                                          | Default                           |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- |
| add                 | whether displayed in add form                                                                                                                                                                                   | boolean                                     | -                                                                                                                                | false                             |
| edit                | whether displayed in edit form                                                                                                                                                                                  | boolean                                     | -                                                                                                                                | false                             |
| form                | whether displayed in form                                                                                                                                                                                       | boolean                                     | -                                                                                                                                | false                             |
| search              | whether displayed in search                                                                                                                                                                                     | boolean                                     | -                                                                                                                                | false                             |
| hide                | whether hide in table                                                                                                                                                                                           | boolean                                     | -                                                                                                                                | false                             |
| prop                | the key of data                                                                                                                                                                                                 | string                                      | -                                                                                                                                | -                                 |
| label               | column label                                                                                                                                                                                                    | string                                      | -                                                                                                                                | -                                 |
| slot                | whether to enable slot                                                                                                                                                                                          | boolean                                     | -                                                                                                                                | false                             |
| children            | grouping table head                                                                                                                                                                                             | array                                       | -                                                                                                                                | -                                 |
| columnKey           | column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered                                                                                    | string                                      | -                                                                                                                                | -                                 |
| width               | column width                                                                                                                                                                                                    | string                                      | -                                                                                                                                | -                                 |
| minWidth            | column minimum width. Columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion                                                                      | string                                      | -                                                                                                                                | -                                 |
| fixed               | whether column is fixed at left/right. Will be fixed at left if `true`                                                                                                                                          | string / boolean                            | true / left / right                                                                                                              | -                                 |
| renderHeader        | render function for table header of this column                                                                                                                                                                 | Function(h, { column, $index })             | -                                                                                                                                | -                                 |
| sortable            | whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the `sort-change` event of Table                                                                | boolean / string                            | true / false / 'custom'                                                                                                          | false                             |
| sortMethod          | sorting method, works when `sortable` is `true`. Should return a number, just like Array.sort                                                                                                                   | Function(a, b)                              | -                                                                                                                                | -                                 |
| sortBy              | specify which property to sort by, works when `sortable` is `true` and `sort-method` is `undefined`. If set to an Array, the column will sequentially sort by the next property if the previous one is equal    | string / array / Function(row, index)       | -                                                                                                                                | -                                 |
| sortOrders          | the order of the sorting strategies used when sorting the data, works when `sortable` is `true`. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array | array                                       | the elements in the array need to be one of the following: `ascending`, `descending` and `null` (restores to the original order) | ['ascending', 'descending', null] |
| resizable           | whether column width can be resized, works when `border` of `el-table` is `true`                                                                                                                                | boolean                                     | -                                                                                                                                | true                              |
| formatter           | function that formats cell content                                                                                                                                                                              | Function(row, column, cellValue, index)     | -                                                                                                                                | -                                 |
| showOverflowTooltip | whether to hide extra content and show them in a tooltip when hovering on the cell                                                                                                                              | Boolean                                     | -                                                                                                                                | false                             |
| align               | alignment                                                                                                                                                                                                       | string                                      | left / center / right                                                                                                            | left                              |
| headerAlign         | alignment of the table header. If omitted, the value of the above `align` attribute will be applied                                                                                                             | string                                      | left / center / right                                                                                                            | same with align                   |
| className           | class name of cells in the column                                                                                                                                                                               | string                                      | -                                                                                                                                | -                                 |
| labelClassName      | class name of the label of this column                                                                                                                                                                          | string                                      | -                                                                                                                                | -                                 |
| filters             | an array of data filtering options. For each element in this array, `text` and `value` are required                                                                                                             | Array[{ text, value }]                      | -                                                                                                                                | -                                 |
| filterPlacement     | placement for the filter dropdown                                                                                                                                                                               | string                                      | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end  | -                                 |
| filterMultiple      | whether data filtering supports multiple options                                                                                                                                                                | boolean                                     | -                                                                                                                                | true                              |
| filterMethod        | data filtering method. If `filter-multiple` is on, this method will be called multiple times for each row, and a row will display if one of the calls returns `true`                                            | Function(value, row, column)                | -                                                                                                                                | -                                 |
| filteredValue       | filter value for selected data, might be useful when table header is rendered with `render-header`                                                                                                              | array                                       | -                                                                                                                                | -                                 |
| index               | customize indices for each row, works on columns with `type=index`                                                                                                                                              | Function(index) / number                    | -                                                                                                                                | -                                 |
| selectable          | function that determines if a certain row can be selected, works when `type` is 'selection'                                                                                                                     | Function(row, index)                        | -                                                                                                                                | -                                 |
| reserveSelection    | whether to reserve selection after data refreshing, works when `type` is 'selection'. Note that `row-key` is required for this to work                                                                          | boolean                                     | -                                                                                                                                | false                             |
| max                 | limit the maximum number of sub-columns                                                                                                                                                                         | number                                      | -                                                                                                                                | -                                 |
| labelWidth          | width of label, e.g. '50px'. Width `auto` is supported.                                                                                                                                                         | string                                      | —                                                                                                                                | —                                 |
| required            | whether the field is required or not, will be determined by validation rules if omitted                                                                                                                         | boolean                                     | —                                                                                                                                | false                             |
| rules               | validation rules of form                                                                                                                                                                                        | object                                      | —                                                                                                                                | —                                 |
| error               | field error message, set its value and the field will validate error and show this message immediately                                                                                                          | string                                      | —                                                                                                                                | —                                 |
| showMessage         | whether to show the error message                                                                                                                                                                               | boolean                                     | —                                                                                                                                | true                              |
| inlineMessage       | inline style validate message                                                                                                                                                                                   | boolean                                     | —                                                                                                                                | false                             |
| size                | control the size of components in this form-item                                                                                                                                                                | string                                      | medium / small / mini                                                                                                            | -                                 |
| span                | number of column the grid spans                                                                                                                                                                                 | number                                      | —                                                                                                                                | 24                                |
| offset              | number of spacing on the left side of the grid                                                                                                                                                                  | number                                      | —                                                                                                                                | 0                                 |
| push                | number of columns that grid moves to the right                                                                                                                                                                  | number                                      | —                                                                                                                                | 0                                 |
| pull                | number of columns that grid moves to the left                                                                                                                                                                   | number                                      | —                                                                                                                                | 0                                 |
| xs                  | `<768px` Responsive columns or column props object                                                                                                                                                              | number / object (e.g. {span: 4, offset: 4}) | —                                                                                                                                | —                                 |
| sm                  | `≥768px` Responsive columns or column props object                                                                                                                                                              | number / object (e.g. {span: 4, offset: 4}) | —                                                                                                                                | —                                 |
| md                  | `≥992px` Responsive columns or column props object                                                                                                                                                              | number / object (e.g. {span: 4, offset: 4}) | —                                                                                                                                | —                                 |
| lg                  | `≥1200px` Responsive columns or column props object                                                                                                                                                             | number / object (e.g. {span: 4, offset: 4}) | —                                                                                                                                | —                                 |
| xl                  | `≥1920px` Responsive columns or column props object                                                                                                                                                             | number / object (e.g. {span: 4, offset: 4}) | —                                                                                                                                | —                                 |

#### menu

| Name             | Description                                             | Type                    | Options | Default             |
| :--------------- | :------------------------------------------------------ | :---------------------- | :------ | :------------------ |
| add              | whether to display a add button                         | boolean                 | -       | true                |
| addText          | the text of add button                                  | string                  | -       | Add                 |
| addProps         | the props of add button, reference `el-button`          | object                  | -       | { type: 'primary' } |
| edit             | whether to display a edit button                        | boolean / Function(row) | -       | true                |
| editText         | the text of edit button                                 | string                  | -       | Edit                |
| editProps        | the props of edit , reference `el-button`               | object                  | -       | { type: 'text' }    |
| del              | whether to display a del button                         | boolean / Function(row) | -       | true                |
| delText          | the text of del button                                  | string                  | -       | Delete              |
| delProps         | the props of del button, reference `el-button`          | object                  | -       | { type: 'text' }    |
| submit           | whether to display a submit button                      | boolean                 | -       | true                |
| submitText       | the text of submit button                               | string                  | -       | Submit              |
| submitProps      | the props of submit buttonbutton, reference `el-button` | object                  | -       | { type: 'primary' } |
| reset            | Whether to display a reset button                       | boolean                 | -       | true                |
| resetText        | the text of reset button                                | string                  | -       | Reset               |
| resetProps       | the props of reset buttonbutton, reference `el-button`  | object                  | -       | -                   |
| search           | whether to display a search button                      | boolean                 | -       | true                |
| searchText       | the text of search button                               | string                  | -       | Search              |
| searchProps      | the props of search , reference `el-button`             | object                  | -       | { type: 'primary' } |
| searchReset      | whether to display a reset button                       | boolean                 | -       | true                |
| searchResetText  | the text of reset button                                | string                  | -       | Reset               |
| searchResetProps | the props of reset button, reference `el-button`        | object                  | -       | -                   |

::: tip Tip
其它属性同 Table columns
:::

### Events

| Name               | Description                                                                                                                                  | Parameters                                                                                            |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| submit             | triggers when the submit click                                                                                                               | close, done, 'add'/'edit', isValid, invalidFields                                                     |
| reset              | triggers when the reset click                                                                                                                | -                                                                                                     |
| delete             | triggers when the delete click                                                                                                               | row                                                                                                   |
| search             | triggers when the search click                                                                                                               | done, isValid, invalidFields                                                                          |
| searchReset        | triggers when the search reset click                                                                                                         | -                                                                                                     |
| select             | triggers when user clicks the checkbox in a row                                                                                              | selection, row                                                                                        |
| select-all         | triggers when user clicks the checkbox in table header                                                                                       | selection                                                                                             |
| selection-change   | triggers when selection changes                                                                                                              | selection                                                                                             |
| cell-mouse-enter   | triggers when hovering into a cell                                                                                                           | row, column, cell, event                                                                              |
| cell-mouse-leave   | triggers when hovering out of a cell                                                                                                         | row, column, cell, event                                                                              |
| cell-click         | triggers when clicking a cell                                                                                                                | row, column, cell, event                                                                              |
| cell-dblclick      | triggers when double clicking a cell                                                                                                         | row, column, cell, event                                                                              |
| row-click          | triggers when clicking a row                                                                                                                 | row, column, event                                                                                    |
| row-contextmenu    | triggers when user right clicks on a row                                                                                                     | row, column, event                                                                                    |
| row-dblclick       | triggers when double clicking a row                                                                                                          | row, column, event                                                                                    |
| header-click       | triggers when clicking a column header                                                                                                       | column, event                                                                                         |
| header-contextmenu | triggers when user right clicks on a column header                                                                                           | column, event                                                                                         |
| sort-change        | triggers when Table's sorting changes                                                                                                        | { column, prop, order }                                                                               |
| filter-change      | column's key. If you need to use the filter-change event, this attribute is mandatory to identify which column is being filtered             | filters                                                                                               |
| current-change     | triggers when current row changes                                                                                                            | currentRow, oldCurrentRow                                                                             |
| header-dragend     | triggers after changing a column's width by dragging the column header's border                                                              | newWidth, oldWidth, column, event                                                                     |
| expand-change      | triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded) | row, (expandedRows \| expanded)                                                                       |
| size-change        | triggers when `page-size` changes                                                                                                            | the new page size                                                                                     |
| current-change     | triggers when `current-page` changes                                                                                                         | the new current page                                                                                  |
| prev-click         | triggers when the prev button is clicked and current page changes                                                                            | the new current page                                                                                  |
| next-click         | triggers when the next button is clicked and current page changes                                                                            | the new current page                                                                                  |
| submit             | triggers when the submit click                                                                                                               | done, isValid, invalidFields                                                                          |
| reset              | triggers when the reset click                                                                                                                | -                                                                                                     |
| validate           | triggers after a form item is validated                                                                                                      | prop name of the form item being validated, whether validation is passed and the error message if not |

### Methods

| Name               | Description                                                                                                                                                                                                                                                                      | Parameters                                                                 |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| clearSelection     | used in multiple selection Table, clear user selection                                                                                                                                                                                                                           | —                                                                          |
| toggleRowSelection | used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected                                                                                                                                   | row, selected                                                              |
| toggleAllSelection | used in multiple selection Table, toggle select all and deselect all                                                                                                                                                                                                             | -                                                                          |
| toggleRowExpansion | used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed                                                                                                                | row, expanded                                                              |
| setCurrentRow      | used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection.                                                                                                                                                            | row                                                                        |
| clearSort          | clear sorting, restore data to the original order                                                                                                                                                                                                                                | —                                                                          |
| clearFilter        | clear filters of the columns whose `columnKey` are passed in. If no params, clear all filters                                                                                                                                                                                    | columnKeys                                                                 |
| doLayout           | refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout                                                                                                                                                      | —                                                                          |
| sort               | sort Table manually. Property `prop` is used to set sort column, property `order` is used to set sort order                                                                                                                                                                      | prop: string, order: string                                                |
| validate           | validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted | Function(callback: Function(boolean, object))                              |
| validateField      | validate one or several form items                                                                                                                                                                                                                                               | Function(props: string \| array, callback: Function(errorMessage: string)) |
| resetFields        | reset all the fields and remove validation result                                                                                                                                                                                                                                | —                                                                          |
| clearValidate      | clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared                                                     | Function(props: string \| array)                                           |

::: tip Tip
如果使用 `typescript` 可以从组件中导出 `ICrudExpose` 提供更好的类型推导
:::

### Slots

| Name                | Description                                                                                                                                                                                   |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| menu-left           | control the menu left display content                                                                                                                                                         |
| menu-right          | control the menu right display content                                                                                                                                                        |
| table               | anything inserted before the menu of table                                                                                                                                                    |
| menu                | control the menu display content of table, parameters { size, row, column, $index }                                                                                                           |
| expand              | control the expand display content, parameters { row, column, $index }                                                                                                                        |
| append              | Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for the table. This slot will be displayed above the summary row if there is one. |
| table-[prop]        | control the `Item` display content of table, parameters { row, column, $index }                                                                                                               |
| [prop]-header       | control the `Item` header display content of table, parameters { column, $index }                                                                                                             |
| form                | anything inserted before the menu of form                                                                                                                                                     |
| form-menu-left      | control the menu left display content of form                                                                                                                                                 |
| form-menu-right     | control the menu right display content of form                                                                                                                                                |
| form-[prop]         | control the `Item` display content of form, parameters { item, value, setValue }                                                                                                              |
| [prop]-label        | control the `Item` label display content of form, parameters { item }                                                                                                                         |
| [prop]-error        | control the `Item` error display content of form, parameters { error, item }                                                                                                                  |
| search              | anything inserted before the menu of search                                                                                                                                                   |
| search-menu-left    | control the menu left display content of search                                                                                                                                               |
| search-menu-right   | control the menu right display content of search                                                                                                                                              |
| search-[prop]       | control the `Item` display content of search, parameters { item, value, setValue }                                                                                                            |
| search-[prop]-label | control the `Item` label display content of search, parameters { item }                                                                                                                       |
| search-[prop]-error | control the `Item` error display content of search, parameters { error, item }                                                                                                                |

::: tip Tip
[prop] the prop of columns
:::
