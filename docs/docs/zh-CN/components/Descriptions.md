---
title: Descriptions
meta:
  - name: description
    content: 列表形式展示多个字段
---

# Descriptions

> 列表形式展示多个字段

## 使用

### 基础用法

当 columns 绑定的是一个具有响应式的数组时，数组的变动会影响 Descriptions 变动（及动态 Descriptions）。如果不需要动态 Descriptions 推荐绑定一个普通数组

::: demo

<template>
  <pro-descriptions
    :columns="columns"
    :detail="detail"
  />
</template>

<script>
export default {
  setup() {
    const columns = [
      { label: 'Date', prop: 'date' },
      { label: 'Name', prop: 'name' },
      { label: 'Address', prop: 'address' },
    ]
    const detail = {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    }

    return {
      columns,
      detail,
    }
  }
}
</script>

:::

### 插槽

直接在模版中增加带 `[prop]` 相关的插槽即可使用插槽

::: demo

<template>
  <pro-descriptions
    :columns="columns"
    :detail="detail"
    border
    size="small"
  >
    <template #title>
      <span>title</span>
    </template>
    <template #extra="{ size }">
      <el-button :size="size">extra</el-button>
    </template>
    <template #name="{ detail, size }">
      <el-tag :size="size">{{ detail.name }}</el-tag>
    </template>
    <template #name-label="{ item }">
      <span>{{ item.label }}:</span>
    </template>
  </pro-descriptions>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const size = ref('')
    const columns = [
      { label: 'Date', prop: 'date' },
      { label: 'Name', prop: 'name' },
      { label: 'Address', prop: 'address' },
    ]
    const detail = {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    }

    return {
      columns,
      detail,
    }
  }
}
</script>

:::

### 获取嵌套键值

::: demo

<template>
  <pro-descriptions
    :columns="columns3"
    :detail="detail3"
    :column="1"
  />
</template>

<script>
export default {
  setup() {
    const columns3 = [
      { label: 'A', prop: 'a' },
      { label: 'B', prop: 'b.c' },
      { label: 'C', prop: 'b.d' },
      { label: 'D', prop: 'd[0].e' },
    ]
    const detail3 = {
      a: 'a value',
      'b.c': 'break nested value',
      b: {
        c: 'nested value c in b',
        d: 'nested value d in b',
      },
      d: [{ e: 'nested value in array' }]
    }

    return {
      columns3,
      detail3,
    }
  }
}
</script>

:::

### 配置

| 参数      | 说明                       | 类型    | 可选值                | 默认值     |
| :-------- | :------------------------- | :------ | :-------------------- | :--------- |
| columns   | 表单配置参考下面 `columns` | array   | -                     | -          |
| detail    | 显示的详情数据             | object  | -                     | -          |
| border    | 是否带有边框               | boolean | —                     | false      |
| column    | 一行显示的数量             | number  | —                     | 3          |
| direction | 排列的方向                 | string  | vertical / horizontal | horizontal |
| size      | 列表的尺寸                 | string  | medium / small / mini | —          |
| title     | 标题文本，显示在左上方     | string  | —                     | —          |
| extra     | 操作区文本，显示在右上方   | string  | —                     | —          |

### columns 的参数

| 参数             | 说明                                                                                                                                       | 类型            | 可选值                | 默认值 |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :-------------- | :-------------------- | :----- |
| prop             | 对应 detail 的字段名                                                                                                                       | string          | —                     | —      |
| label            | 标签文本                                                                                                                                   | string          | —                     | —      |
| span             | 列的数量                                                                                                                                   | number          | —                     | 1      |
| width            | 列的宽度，不同行相同列的宽度按最大值设定（如无 border ，宽度包含标签与内容）                                                               | string / number | —                     | —      |
| min-width        | 列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列（如无 border，宽度包含标签与内容） | string / number | —                     | —      |
| align            | 列的内容对齐方式（如无 border，对标签和内容均生效）                                                                                        | string          | left / center / right | left   |
| label-align      | 列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 border，请使用 align 参数）                                                     | string          | left / center / right | —      |
| class-name       | 列的内容自定义类名                                                                                                                         | string          | —                     | —      |
| label-class-name | 列的标签自定义类名                                                                                                                         | string          | —                     | —      |

## 插槽

| 名称         | 说明                                          |
| ------------ | --------------------------------------------- |
| title        | 自定义标题文本，显示在左上方, 参数 { size }   |
| extra        | 自定义操作区文本，显示在右上方, 参数 { size } |
| [prop]       | 当前这项的内容, 参数 { size, detail }         |
| [prop]-label | 当前这项的标签文本内容, 参数 { size, item }   |

::: tip 提示
[prop] 为 columns 中定义的 prop
:::
