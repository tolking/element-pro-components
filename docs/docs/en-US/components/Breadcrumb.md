---
title: Breadcrumb
meta:
  - name: description
    content: Auto generate breadcrumbs according to the current page router
---

# Breadcrumb

> Auto generate breadcrumbs according to the current page router

::: tip Tip
If the routes contains [dynamic-matching](https://next.router.vuejs.org/guide/essentials/dynamic-matching.html), you need to specify the [name](https://next.router.vuejs.org/api/#name-1) of router to be able to generate the corresponding breadcrumbs
:::

## Use

### Basic Use

::: demo Will be auto generated according to the current routes

<template>
  <pro-breadcrumb />
</template>

<script>
export default {}
</script>

:::

### Props

| Name            | Description                  | Type   | Options | Default           |
| :-------------- | :--------------------------- | :----- | :------ | :---------------- |
| routes          | current routes               | array  | -       | from `vue-router` |
| separator       | separator character          | string | -       | `/`               |
| separator-class | class name of icon separator | string | -       | -                 |
