---
title: Link
meta:
  - name: description
    content: Generate appropriate tags based on link information
---

# Link

> Generate appropriate tags based on link information

## Use

### Basic Use

::: demo

<template>
  <pro-link class="docs-link">normal text</pro-link>
  <pro-link
    to="/en-US/guide/"
    class="docs-link"
  >guide</pro-link>
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

### Props

| Name | Description  | Type              | Options | Default |
| ---- | ------------ | ----------------- | ------- | ------- |
| to   | link address | string / undefind | -       | -       |
