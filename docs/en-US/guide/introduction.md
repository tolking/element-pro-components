---
title: introduction
meta:
  - name: description
    content: ntroduction to the basic information of the element-pro-components component library
---

# introduction

element-pro-components is a component library for Vue 3 base on [element-plus](https://element-plus.org/), [vue](https://v3.vuejs.org/), [vue-router](https://next.router.vuejs.org/)

## Cause

For development, most of the forms and table can be reused, and it is more convenient to use by encapsulating the non-business logic parts into components. At the same time, components can be bound with routing, reducing value passing. And to realize some components that are not used in the admin template on element-plus, etc.

Although the encapsulation of `element-plus` is already very good, it is essential to use `el-table` or `el-form` to write a lot of `el-table-column` or `el-form-item` Code. We convert it into `column` attribute, and dynamically generate these data by passing in an array. If you data with reactive, when you change the `column`, the table or form will change accordingly. According to this feature, you can implement permissions and other functions in the way you want

## Why not

### Template

For rapid development, the template may be more convenient, but the template may not be very suitable for you. You may not be used to the `prettier` or `eslint` of the template; You may not be able to use the partial dependencies of the template; You may care about the build project is 1M+ size before the page is written...

The advantage of componentization is that you can build your own development environment. If you want to use `vite` to build, you can use it, if you don't want to use `eslint`, you don't need it...

### Base on vue2 element-ui

The development concept of the component library is to face the future, if you look at the source code, you will find that it is like [script setup](https://github.com/vuejs/rfcs/pull/227.) of vue3 or like [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) of CSSNext. Under the circumstance of ensuring the compatibility of most browsers, more new features and functions will be used for development

## Browser support

Same with element-plus

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge ≥ 79                                                              | Firefox ≥ 78                                                                      | Chrome ≥ 64                                                                    | Safari ≥ 12                                                                    |
