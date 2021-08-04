---
title: Breadcrumb
meta:
  - name: description
    content: 根据当前页面路由自动生成面包屑
---

# Breadcrumb

> 根据当前页面路由自动生成面包屑

## 使用

### 基础用法

::: demo 将根据当前路由自动生成

<template>
  <pro-breadcrumb />
</template>

<script>
export default {}
</script>

:::

### 配置

| 参数            | 说明             | 类型   | 可选值 | 默认值                 |
| :-------------- | :--------------- | :----- | :----- | :--------------------- |
| routes          | 当前程序路由     | array  | -      | 从 `vue-router` 中获取 |
| separator       | 分隔符           | string | -      | `/`                    |
| separator-class | 图标分隔符 class | string | -      | -                      |
