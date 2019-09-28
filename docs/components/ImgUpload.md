---
title: ImgUpload
lang: zh-CN
description: 基于 cropperjs element-ui 的图片裁剪
--- 

# ImgUpload

> 基于 cropperjs element-ui 的图片裁剪

## 作用

拦截图片的自动上传，并弹出裁剪窗口，通过裁剪让图片达到要求的比例和尺寸，并提供直接上传的按钮

**通过`直接上传`按钮将直接上传图片，通过`裁剪上传`才会上传选中区域的裁剪图片**

## 使用

``` html vue
<template>
  <img-upload
    v-model="imgSrc"
    :width="143"
    :height="144"
    :scaling="143 / 144"
    tip="提示文字"
    @change="handleChange"
  />
</template>

<script>
export default {
  data() {
    return {
      imgSrc: ''
    }
  },
  methods: {
    handleChange(url) {
      console.log(url)
    }
  }
}
</script>
```

**效果**

<template>
  <img-upload v-model="imgSrc" :width="143" :height="144" :scaling="143 / 144" tip="提示文字" @change="handleChange" />
</template>

<script>
import ImgUpload from '../../src/ImgUpload'

export default {
  components: { ImgUpload },
  data() {
    return {
      imgSrc: ''
    }
  },
  methods: {
    handleChange(url) {
      console.log(url)
    }
  }
}
</script>

## 配置

v-model 或者 value
- type: `String`
- default: `''`

绑定图片的地址

width
- type: `Number`
- default: `NaN`

设置裁剪后图片的宽度
    
height
- type: `Number`
- default: `NaN`

设置裁剪后图片的高度

scaling
- type: `Number`
- default: `NaN`
    
裁剪图片的固定比例

tip
- type: `String`
- default: `null`

提示文字

## 事件

change

上传成功后返回图片 `url`

## 注意

需要手动修改组件里面的*上传文件*
