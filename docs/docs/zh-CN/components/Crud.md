# Crud

> 封装表格组件和表单组件实现通过配置动态生成页面，支持表格和表单组件的全部属性

## 使用

### 基础用法

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

### 插槽

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

## 配置

| 参数                  | 说明                                     | 类型                              | 可选值 | 默认值                     |
| :-------------------- | :--------------------------------------- | :-------------------------------- | :----- | :------------------------- |
| v-model               | 表单绑定值                               | object                            | -      | -                          |
| v-model:search        | 搜索表单绑定值                           | object                            | -      | -                          |
| columns               | 自动生成 Crud 的参数，参考下面 columns   | array                             | -      | -                          |
| add-columns           | 自动生成新增表单的参数，参考下面 columns | array                             | -      | 从 `columns` 中获取        |
| edit-columns          | 自动生成编辑表单的参数，参考下面 columns | array                             | -      | 从 `columns` 中获取        |
| form-columns          | 自动生成表单的参数，参考下面 columns     | array                             | -      | 从 `columns` 中获取        |
| search-columns        | 自动生成搜索表单的参数，参考下面 columns | array                             | -      | 从 `columns` 中获取        |
| table-columns         | 自动生成表格的参数，参考下面 columns     | array                             | -      | 从 `columns` 中获取        |
| menu                  | 按钮配置参考下面 `menu`                  | object                            | -      | -                          |
| search-rules          | 搜索表单验证规则                         | object                            | -      | -                          |
| title                 | 弹窗的标题                               | string                            | —      | 同 menu addText / editText |
| width                 | 弹窗的宽度                               | string / number                   | —      | 50%                        |
| fullscreen            | 是否为全屏弹窗                           | boolean                           | —      | false                      |
| top                   | 弹窗 CSS 中的 margin-top 值              | string                            | —      | 15vh                       |
| modal                 | 是否需要遮罩层                           | boolean                           | —      | true                       |
| append-to-body        | 弹窗自身是否插入至 body 元素上           | boolean                           | —      | false                      |
| lock-scroll           | 是否在 弹窗出现时将 body 滚动锁定        | boolean                           | —      | true                       |
| custom-class          | 弹窗的自定义类名                         | string                            | —      | pro-crud-dialog            |
| open-delay            | 弹窗打开的延时时间，单位毫秒             | number                            | —      | 0                          |
| close-delay           | 弹窗关闭的延时时间，单位毫秒             | number                            | —      | 0                          |
| close-on-click-modal  | 是否可以通过点击 modal 关闭弹窗          | boolean                           | —      | true                       |
| close-on-press-escape | 是否可以通过按下 ESC 关闭弹窗            | boolean                           | —      | true                       |
| show-close            | 是否显示关闭按钮                         | boolean                           | —      | true                       |
| before-open           | 弹窗开启前的回调，会暂停弹窗的开启       | Function(done, formType, row)     | -      | -                          |
| before-close          | 关闭前的回调，会暂停弹窗的关闭           | Function(done)，done 用于关闭弹窗 | —      | —                          |
| center                | 是否对头部和底部采用居中布局             | boolean                           | —      | false                      |
| destroy-on-close      | 关闭时销毁弹窗中的元素                   | boolean                           | —      | false                      |

::: tip 提示
其它属性与 Table 和 Form 相同
:::

- columns 的参数

| 参数   | 说明                 | 类型    | 可选值 | 默认值 |
| :----- | :------------------- | :------ | :----- | :----- |
| add    | 是否在新增表单中显示 | boolean | -      | false  |
| edit   | 是否在编辑表单中显示 | boolean | -      | false  |
| form   | 是否在表单中显示     | boolean | -      | false  |
| search | 是否在搜索表单中显示 | boolean | -      | false  |
| hide   | 是否在表格中隐藏     | boolean | -      | false  |

::: tip 提示
其它属性与 Table columns 和 Form columns 相同
:::

- menu 的参数 (可通过全局配置配置)

| 参数             | 说明                              | 类型                    | 可选值 | 默认值              |
| :--------------- | :-------------------------------- | :---------------------- | :----- | :------------------ |
| add              | 是否显示 add 按钮                 | boolean                 | -      | true                |
| addText          | add 按钮显示的文字                | string                  | -      | Add                 |
| addProps         | add 按钮的配置，参考 el-button    | object                  | -      | { type: 'primary' } |
| edit             | 是否显示 edit 按钮                | boolean / Function(row) | -      | true                |
| editText         | edit 按钮显示的文字               | string                  | -      | Edit                |
| editProps        | edit 按钮的配置，参考 el-button   | object                  | -      | { type: 'text' }    |
| del              | 是否显示 del 按钮                 | boolean / Function(row) | -      | true                |
| delText          | del 按钮显示的文字                | string                  | -      | Delete              |
| delProps         | del 按钮的配置，参考 el-button    | object                  | -      | { type: 'text' }    |
| submit           | 是否显示 submit 按钮              | boolean                 | -      | true                |
| submitText       | submit 按钮显示的文字             | string                  | -      | Submit              |
| submitProps      | submit 按钮的配置，参考 el-button | object                  | -      | { type: 'primary' } |
| reset            | 是否显示 reset 按钮               | boolean                 | -      | true                |
| resetText        | 是否显示 reset 按钮显示的文字     | string                  | -      | Reset               |
| resetProps       | reset 按钮的配置，参考 el-button  | object                  | -      | -                   |
| search           | 是否显示 search 按钮              | boolean                 | -      | true                |
| searchText       | search 按钮显示的文字             | string                  | -      | Search              |
| searchProps      | search 按钮的配置，参考 el-button | object                  | -      | { type: 'primary' } |
| searchReset      | 是否显示 reset 按钮               | boolean                 | -      | true                |
| searchResetText  | 是否显示 reset 按钮显示的文字     | string                  | -      | Reset               |
| searchResetProps | reset 按钮的配置，参考 el-button  | object                  | -      | -                   |

::: tip 提示
其它属性同 Table columns
:::

## 事件

| 事件名      | 说明                          | 参数                                              |
| ----------- | ----------------------------- | ------------------------------------------------- |
| submit      | submit 被点击后触发           | close, done, 'add'/'edit', isValid, invalidFields |
| reset       | reset 按钮被点击后触发        | -                                                 |
| delete      | delete 按钮被点击后触发       | row                                               |
| search      | search 按钮被点击后触发       | done, isValid, invalidFields                      |
| searchReset | search reset 按钮被点击后触发 | -                                                 |

::: tip 提示
其它事件与 Table 和 Form 相同
:::

## 方法

| 方法名             | 说明                                                                                                                                                                 | 参数                                                                       |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| clearSelection     | 用于多选表格，清空用户的选择                                                                                                                                         | -                                                                          |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）                                                          | row, selected                                                              |
| toggleAllSelection | 用于多选表格，切换全选和全不选                                                                                                                                       | -                                                                          |
| toggleRowExpansion | 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）                                              | row, expanded                                                              |
| setCurrentRow      | 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。                                                                                 | row                                                                        |
| clearSort          | 用于清空排序条件，数据会恢复成未排序的状态                                                                                                                           | -                                                                          |
| clearFilter        | 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由 columnKey 组成的数组以清除指定列的过滤条件                                                    | columnKey                                                                  |
| doLayout           | 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法                                                                                   | -                                                                          |
| sort               | 手动对 Table 进行排序。参数`prop`属性指定排序列，`order`指定排序顺序。                                                                                               | prop: string, order: string                                                |
| validate           | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))                              |
| validateField      | 对部分表单字段进行校验的方法                                                                                                                                         | Function(props: array \| string, callback: Function(errorMessage: string)) |
| resetFields        | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                                                                                           | -                                                                          |
| clearValidate      | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果                                                             | Function(props: array \| string)                                           |

::: tip 提示
如果使用 `typescript` 可以从组件中导出 `ICrudExpose` 提供更好的类型推导
:::

## 插槽

| name                | 说明                                                                     |
| :------------------ | :----------------------------------------------------------------------- |
| menu-left           | 新增按钮左侧                                                             |
| menu-right          | 新增按钮右侧                                                             |
| table               | 在表格右侧菜单前插入的任意内容                                           |
| menu                | 表格右侧自定义按钮，参数为 { size, row, column, $index }                 |
| expand              | 当 expand 为 true 时，配置展开显示的内容，参数为 { row, column, $index } |
| append              | 插入至表格最后一行之后的内容                                             |
| table-[prop]        | 当前这列的内容，参数为 { row, column, $index }                           |
| [prop]-header       | 当前这列表头的内容，参数为 { column, $index }                            |
| form                | 在表单底部按钮前插入的任意内容                                           |
| form-menu-left      | 表单底部按钮左侧                                                         |
| form-menu-right     | 表单底部按钮右侧                                                         |
| form-[prop]         | 当前这项的 Form Item 的内容，参数为 { item, value, setValue }            |
| [prop]-label        | 当前这项的标签文本的内容，参数为 { item }                                |
| [prop]-error        | 当前这项的自定义表单校验信息的显示方式，参数为 { error, item }           |
| search              | 在搜索按钮菜单前插入的任意内容                                           |
| search-menu-left    | 搜索表单按钮左侧                                                         |
| search-menu-right   | 搜索表单按钮右侧                                                         |
| search-[prop]       | 当前这项的 Form Item 的内容，参数为 { item, value, setValue }            |
| search-[prop]-label | 当前这项的标签文本的内容，参数为 { item }                                |
| search-[prop]-error | 当前这项的自定义表单校验信息的显示方式，参数为 { error, item }           |

::: tip 提示
[prop] 为 columns 中定义的 prop
:::
