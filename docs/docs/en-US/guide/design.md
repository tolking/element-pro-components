---
title: Design
meta:
  - name: description
    content: The design of element-pro-components component library
---

# 组件设计

## 布局组件

> 包括 `ProLayout` `ProMenu` `ProBreadcrumb` `ProTabs`

布局组件用于页面的快速搭建。参考：

```vue
<template>
  <pro-layout>
    <template #header-left>
      <pro-breadcrumb />
    </template>
    <template #header-right>
      <nav-header />
    </template>
    <template #header-bottom>
      <pro-tabs />
    </template>
  </pro-layout>
</template>
```

- `ProLayout` 提供一套基础的界面，内部使用了 `ProMenu`
- `ProBreadcrumb` 根据当前的路由信息自动生成（显示 router.meta 中的 title）
- `ProTabs` 根据路由的变化自动生成（显示 router.meta 中的 title）

相关配置可以查看相关组件文档

## 表单组件

> 包括 `ProForm` `ProRadio` `ProRadioButton` `ProCheckbox` `ProCheckboxButton` `ProSelect` `ProInputTag` `ProAutocompleteTag`

表单组件用于快速构建表单。参考：

```vue
<template>
  <pro-form v-model="form" :columns="columns" />
</template>

<script>
import { h, ref } from 'vue'

export default {
  setup() {
    const form = ref({})
    const list = ref([
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Dart', label: 'dart' },
    ])
    const columns = ref([
      {
        label: 'input',
        prop: 'input',
        component: 'el-input',
        props: {
          clearable: true,
          'prefix-icon': 'el-icon-search',
          suffixIcon: 'el-icon-date',
          slots: {
            prefix: () =>
              h('i', { className: 'el-input__icon el-icon-search' }),
            append: () => '搜索',
          },
          onChange: (e) => console.log(e),
        },
      },
      {
        label: 'radio',
        prop: 'radio',
        component: 'pro-radio',
        props: {
          data: list,
        },
      },
    ])

    return {
      form,
      columns,
    }
  },
}
</script>
```

### 关于 `ProForm`

- 通过 `v-model` 绑定的**必须**是一个响应式对象，如：`const form = ref({})`
- 通过 `columns` 传入的数组自动生成表单。当 `columns` 内部数据（包括引用数据）不会变动时，`columns` **可以不是**一个响应式对象；当 `columns` 中的数据变化（包括引用数据）需要响应到表单上时，**必须**是一个响应式对象
- `columns` 中的 `prop` 为对应生成 form 上的键值，需要是一个**唯一值**
- `columns` 中的 `component` 指向的组件**必须**通过全局注册，否则无法渲染组件。同时需要组件能够通过 `v-model` 绑定数据，否则需要通过插槽使用组件，如：`ElUpload`。当然也根据业务逻辑自己封装成通过 `v-model` 绑定数据的组件，这样就可以直接使用了
- `columns` 中的 `props` 中数据将直接传递给对应组件。**对于事件需要通过 `on[Event]` 驼峰这种形式绑定。如：`change` -> `onChange`, `input` -> `onInput`**
- 通过 `columns` 中的 `props` 下面的 `slots` 可以向对应组件传递简单的[渲染函数](https://v3.cn.vuejs.org/guide/render-function.html)
- 通过 `columns` 中的 `children` 可以配置实现子表单，子表单输入的为一个对象数组
- 组件不包含按钮的权限控制，需要手动通过传入 `menu` 配置按钮显示与隐藏

### 关于 `ProRadio` `ProRadioButton` `ProCheckbox` `ProCheckboxButton` `ProSelect`

都是为了更好的在 `ProForm` 中使用，而进行的简单封装

## 表格组件

> 包括 `ProTable` `ProCrud` `ProColumnSetting`

- `ProTable` 用于快速构建表格
- `ProCrud` 是基于 `ProTable` 与 `ProForm` 的一套具有增删改查的表格组件

### 关于 `ProTable`

```vue
<template>
  <pro-table :data="data" :columns="columns" />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const columns = ref([
      { label: '日期', prop: 'date', render: '--' },
      { label: '姓名', prop: 'name' },
      { label: '地址', prop: 'address' },
    ])
    const data = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])

    return {
      data,
      columns,
    }
  },
}
</script>
```

- 通过 `total` 实现分页显示
- 通过 `v-model:current-page` 绑定当前页数
- 通过 `v-model:page-size` 绑定每页显示条目个数
- 通过 `columns` 传入的数组自动生成表格。当 `columns` 内部数据（包括引用数据）不会变动时，`columns` **可以不是**一个响应式对象；当 `columns` 中的数据变化（包括引用数据）需要响应到表单上时，**必须**是一个响应式对象
- `columns` 中的 `prop` 为对应 data 上的键值，需要是一个**唯一值**
- 通过 `columns` 中的 `render` 可以使用简单的[渲染函数](https://v3.cn.vuejs.org/guide/render-function.html)
- 通过 `columns` 中的 `children` 可以配置实现多级表头
- `columns` 内设计为仅包含与业务相关的字段（这样能够更方便与 `ProForm` 配置融合）。对于与功能相关的 `index` `selection` `expand` `menu` 需要配置实现

### 关于 `ProCrud`

`ProCrud` 是一个基于 `ProTable` 和 `ProForm` 融合的组件。提供快速开发显示表格、搜索、新建表单、修改表单、删除功能的页面

```vue
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
  },
}
</script>
```

- 支持 `ProTable` 与 `ProForm` 的全部属性（由于两者都存在 `align`，所以 `align` 属性会被优先用于 `ProTable` 中）
- 通过 `columns` 传入的数组可以自动生成表格、搜索、表单。内部根据 `columns` 定义的属性（`add` - 新增表单、`edit` - 编辑表单、`form` - 新增与编辑表单、`search` - 搜索表单、`hide` - 表格中隐藏）筛选分发到对应组件生成相关内容
- 对于更加复杂的情况可以通过各种单独的属性进行传值（`add-columns` - 新增表单、`edit-columns` - 编辑表单、`form-columns` - 新增与编辑表单、`search-columns` - 搜索表单、`table-columns` - 表格）
- `columns` 内部的 `rules` 会被用到各个表单中。通过上面的方法可以避免这个问题，或者通过 `search-rules` `rules` 属性进行指定
- 默认情况下不显示 新增 编辑 删除 按钮，在配置 `menu` 后将显示。如果要进行权限限制可以通过 `menu` 配置按钮的显示与隐藏
