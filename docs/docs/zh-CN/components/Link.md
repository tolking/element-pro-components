---
title: Link
meta:
  - name: description
    content: 根据链接信息生成合适的标签
---

# Link

> 根据链接信息生成合适的标签

## 使用

### 基础用法

::: demo

<template>
  <pro-link class="docs-link">普通文本</pro-link>
  <pro-link
    to="/zh-CN/guide/"
    class="docs-link"
  >快速上手</pro-link>
  <pro-link
    to="https://github.com/tolking/element-pro-components#readme"
    class="docs-link"
  >github</pro-link>
</template>

<style>
.docs-link {
  display: block;
  margin-bottom: 10px;
}
</style>

<script>
export default {}
</script>

:::

### 配置

| 参数 | 说明     | 类型              | 可选值 | 默认值 |
| ---- | -------- | ----------------- | ------ | ------ |
| to   | 链接地址 | string / undefind | -      | -      |
