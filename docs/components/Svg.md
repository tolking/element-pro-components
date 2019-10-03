---
title: Svg
lang: zh-CN
description: 基于 svg-sprite-loader
--- 

# Svg

> 基于 svg-sprite-loader

## 作用

使用 svg 图像

## 使用

**使用这个组建你还需要进行下面额外配置**

``` sh
# 安装 svg-sprite-loader
yarn add svg-sprite-loader file-loader -D
# or
npm i svg-sprite-loader file-loader -D
```

``` sh
# 推荐文件结构
src
  |- assets
    |- icons
      |-- index.js
      |-- svg
        |-- XXX.svg
        |-- ...
```

``` js
// src-> assets-> icons -> index.js
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
```

``` js
// main.js
import '@/assets/icons'
```

**配置 `webpack`**

- @vue/cli 3

``` js
// vue.config.js
const path = require('path')

module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, './public/icons'))
      .end()
      .use('file-loader')
      .loader('file-loader')
  }
}
```

**效果**

::: demo
<template>
  <pro-svg icon="search" width="2rem" height="2rem" />
</template>
:::

## 配置

icon
- type: `String`
- required: `true`

需要显示的svg图片

fill
- type: `String`
- default: `currentColor`

填充颜色

width
- type: `String`
- default: `1em`

宽度

height
- type: `String`
- default: `1em`

高度
