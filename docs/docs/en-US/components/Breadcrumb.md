---
title: Breadcrumb
meta:
  - name: description
    content: Auto generate breadcrumbs according to the current page router
---

# Breadcrumb

> Auto generate breadcrumbs according to the current page router

## Use

### Basic Use

Will be auto generated according to the current routes

::: demo
@/demo/Breadcrumb/base.vue
:::

### Custom Separator

Modify the separator by `separator`

::: demo
@/demo/Breadcrumb/separator.vue
:::

### Props

| Name           | Description                 | Type               | Options | Default |
| :------------- | :-------------------------- | :----------------- | :------ | :------ |
| separator      | separator character         | string             | -       | `/`     |
| separator-icon | icon name of icon separator | string / Component | -       | -       |
