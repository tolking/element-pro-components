# Form

> 封装表单组件实现通过配置动态生成表单

::: tip 提示
可以自动代理支持通过 `v-model` 绑定值的单一节点组件，例如：

- 支持 `el-input` `el-switch` `pro-input-tag` 等
- 不支持 `el-upload` `el-select` `el-radio-group` `el-checkbox-group` 等
  :::

::: warning 警告
组件内部并不包括相关能够使用的组件，所以在使用相关组件前，你必须通过全局注册它

```js
import { ElInput } from 'element-plus'

app.use(ElInput)
// 或者
app.component(ElInput.name, ElInput)
```

TODO: 未来将封装不支持的常用组件，但现在你需要通过插槽使用不支持的组件
:::

## 使用

1. 普通表单

::: demo 通过传入 columns 实现生成表单

<template>
  <pro-form
    v-model="form"
    :columns="columns"
    label-width="120px"
  >
    <template #date-label>
      <i class="el-icon-time" />
      <span>Date</span>
    </template>
    <template #date="{ item, value, setValue }">
      <span>{{ item }} - {{ value }} - {{ setValue }}</span>
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
export default {
  data() {
    return {
      form: {
        date: 'date'
      },
      columns: [
        {
          label: 'Date',
          prop: 'date',
          component: 'el-input',
          slot: true,
        },
        {
          label: 'Name',
          prop: 'name',
          component: 'el-input',
          props: {
            clearable: true,
            placeholder: 'placeholder',
          },
        },
        {
          label: 'Address',
          prop: 'address',
          component: 'pro-input-tag',
        },
      ]
    }
  }
}
</script>

:::

2. 嵌套组件

::: demo 通过配置 columns 的 children 自动生成子表单

<template>
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

<script setup>
import { ref } from 'vue'

const form1 = ref({})
const columns1 = [
  {
    label: 'Date',
    prop: 'date',
    component: 'el-input',
  },
  {
    label: 'User',
    prop: 'user',
    max: 3,
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
        slot: true,
      },
    ],
  },
]
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
