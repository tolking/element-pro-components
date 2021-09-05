---
title: 介绍
meta:
  - name: description
    content: element-pro-components 组件库的基础信息介绍
---

# 介绍

element-pro-components 是一个基于 [element-plus](https://element-plus.org/), [vue](https://v3.vuejs.org/), [vue-router](https://next.router.vuejs.org/) 的一个适用于中后台开发的一套组件库

::: warning 警告
在进入 v1.0.0 前，我们可能会对组件进行大幅度改动。如果你现在就在使用，版本升级的时候可以参考 [CHANGELOG](https://github.com/tolking/element-pro-components/blob/master/CHANGELOG.md)
:::

## 起因

对于中后台开发来说，大部分的表格表单等页面都可以复用，通过将非业务逻辑的部分封装起来成组件能够更加方便使用。同时组件可以和路由等绑定，减少传值。以及实现一些 `element-plus` 上没有后台常用的功能等

虽然 `element-plus` 的封装已经很好了，但对于 `el-table` 或 `el-form` 的使用必不可少的需要写大量 `el-table-column` 或 `el-form-item` 代码。我们将它转换成 `column` 配置，通过传入一个数组动态生成这些数据。如果你传入的是具有响应式的数据，在改变 `column` 时，表格或表单会随之改变。根据这个特性你可以按照喜欢的方式去实现权限等功能

## 为什么不是

### 模版

对于快速开发，或许模版更加方便，但模版并不一定十分适合你。你可能不习惯模版的 `prettier` 或 `eslint` 配置、你可能用不上模版的部分依赖、你可能会在意还没有写页面打包就 1M+ 的大小...

组件化的优势就是，你可以自己搭建开发环境。想用 `vite` 构建就用、想不用 `eslint` 就不用...

### 基于 vue2 element-ui

该组件库的开发理念就是面向未来，如果查看源码你就会发现像是 vue 3 的 [script setup](https://github.com/vuejs/rfcs/pull/227.) 实验性功能、像是 CSSNext 的 [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)。在保证大部分浏览器的兼容性的情况下，会更多的使用新特性、新功能来开发

## 贡献

组件库还处于早期开发阶段，功能还需要完善。如果你希望参与贡献，欢迎 [Pull Request](https://github.com/tolking/element-pro-components/pulls)。如果只是简单的文档相关的错误修正，你可以直接 PR。但如果是 BUG、新功能、新组件等，最好优先提 [issues](https://github.com/tolking/element-pro-components/issues)

git 提交信息风格参考 [vue commit-convention](https://github.com/vuejs/vue-next/blob/master/.github/commit-convention.md)

## 浏览器支持

不再支持 IE 浏览器，仅支持现代浏览器
