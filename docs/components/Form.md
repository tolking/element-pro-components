# Form

> 封装表单组件实现通过配置动态生成表单

::: tip 提示
可以自动代理支持通过 `v-model` 绑定值的单一节点组件，例如：

- 支持 `el-input` `el-switch` 等
- 不支持 `el-upload` `el-select` `el-radio-group` `el-checkbox-group` 等

可以使用相关 `pro-select` `pro-radio` `pro-checkbox` 等代替
:::

::: warning 警告
组件内部并不包括相关能够使用的组件，所以在使用相关组件前，你必须通过全局注册它

```js
import { ElInput } from 'element-plus'

app.use(ElInput)
// 或者
app.component(ElInput.name, ElInput)
```

:::

## 使用

::: demo 通过传入 columns 实现生成表单；通过配置 columns 的 children 配置子表单

<template>
  <p>1. 普通表单</p>
  <pro-form
    v-model="form"
    :columns="columns"
    label-width="120px"
    size="small"
  >
    <template #slot-label>
      <i class="el-icon-time" />
      <span>Date</span>
    </template>
    <template #slot="{ item, value, setValue }">
      <span>{{ item }} - {{ value }} - {{ setValue }}</span>
    </template>
    <template #menu>
      <el-button type="primary">
        Submit
      </el-button>
      <el-button>Cancel</el-button>
    </template>
  </pro-form>
  <p>2. 子表单</p>
  <pro-form
    v-model="form1"
    :columns="columns1"
    label-width="120px"
  >
    <template #address="{ value, setValue }">
      <pro-input-tag
        :model-value="value"
        @update:modelValue="setValue"
      />
    </template>
    <template #menu>
      <el-button type="primary">
        Submit
      </el-button>
      <el-button>Cancel</el-button>
    </template>
  </pro-form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form = ref({})
    const form1 = ref({})
    const list = [
      { value: 'Go', tag: 'go', disabled: true },
      { value: 'JavaScript', tag: 'javascript' },
      { value: 'Python', tag: 'python' },
    ]
    const columns = ref([
      {
        // label: 'Slot',
        prop: 'slot',
        component: 'el-input',
        slot: true,
      },
      {
        label: 'input',
        prop: 'input',
        component: 'el-input',
        props: {
          clearable: true,
          placeholder: 'placeholder',
        },
      },
      {
        label: 'input-tag',
        prop: 'inputTag',
        component: 'pro-input-tag',
        props: {
          placeholder: 'Click the space after input',
        },
      },
      {
        label: 'autocomplete-tag',
        prop: 'autocompleteTag',
        component: 'pro-autocomplete-tag',
        props: {
          fetchSuggestions: querySearch,
          placeholder: 'Click the space after input',
        },
      },
      {
        label: 'radio',
        prop: 'radio',
        component: 'pro-radio',
        props: {
          data: list,
          config: { label: 'tag' },
        },
      },
      {
        label: 'radio-button',
        prop: 'radioButton',
        component: 'pro-radio-button',
        props: {
          data: list,
          config: { label: 'tag' },
        },
      },
      {
        label: 'checkbox',
        prop: 'checkbox',
        component: 'pro-checkbox',
        props: {
          data: list,
          config: { label: 'tag' },
        },
      },
      {
        label: 'checkbox-button',
        prop: 'checkboxButton',
        component: 'pro-checkbox-button',
        props: {
          data: list,
          config: { label: 'tag' },
        },
      },
      {
        label: 'select',
        prop: 'select',
        component: 'pro-select',
        props: {
          data: list,
          config: { label: 'tag' },
        },
      },
    ])
    const columns1 = ref([
      {
        label: 'Date',
        prop: 'date',
        component: 'el-input',
      },
      {
        label: 'User',
        prop: 'user',
        // max: 3,
        size: 'mini',
        children: [
          {
            label: 'Name',
            prop: 'name',
            component: 'el-input',
          },
          {
            label: 'Address',
            prop: 'address',
            component: 'el-input',
          },
        ],
      },
    ])

    function querySearch(queryString, cb) {
      cb(
        queryString
          ? list.filter((i) => {
              return i.value.indexOf(queryString.toLowerCase()) === 0
            })
          : list
      )
    }

    return {
      form,
      columns,
      form1,
      columns1,
    }
  }
}
</script>

:::

## 配置

### v-model

绑定表单数据，替代 `ElForm` 的 model

### columns

自动生成表单的参数，由下面字段组成的数组

| 参数      | 说明                                       | 类型    | 默认值 |
| :-------- | :----------------------------------------- | :------ | :----- |
| slot      | 是否开启自定义插槽功能                     | boolean | false  |
| component | 当前项对应的组件                           | string  | -      |
| props     | 传递的对应的组件的参数                     | object  | -      |
| children  | 实现子表单                                 | array   | -      |
| max       | 与 children 一起使用，限制子表单的最大数量 | number  | -      |

以及 ElFormItem 的配置

### 其它配置

同 [ElForm](https://element-plus.gitee.io/#/zh-CN/component/form)

## 插槽

| name         | 说明                                                           |
| :----------- | :------------------------------------------------------------- |
| -            | 在底部菜单前插入的任意内容                                     |
| menu         | 表单底部按钮                                                   |
| [prop]       | 当前这项的 Form Item 的内容，参数为 { item, value, setValue }  |
| [prop]-label | 当前这项的标签文本的内容，参数为 { item }                      |
| [prop]-error | 当前这项的自定义表单校验信息的显示方式，参数为 { error, item } |

::: tip 提示
[prop] 为 columns 中定义的 prop
:::
