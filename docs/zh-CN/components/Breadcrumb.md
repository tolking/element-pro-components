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

将根据当前路由自动生成

::: demo
@/demo/Breadcrumb/base.vue
:::

### 分隔符

通过 `separator` 修改分隔符

::: demo
@/demo/Breadcrumb/separator.vue
:::

### 配置

| 参数           | 说明            | 类型               | 可选值 | 默认值 |
| :------------- | :-------------- | :----------------- | :----- | :----- |
| separator      | 分隔符          | string             | -      | /      |
| separator-icon | 图标分隔符 icon | string / Component | -      | -      |
