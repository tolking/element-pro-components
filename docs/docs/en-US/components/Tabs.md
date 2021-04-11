# Tabs

> display page access history

# Use

## Basic Use

::: demo Automatic record routes

<template>
  <pro-tabs />
</template>

<script>
export default {}
</script>

:::

### Props

| Name         | Description                                                                                                                             | Type                                | Accepted Values    | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------ | ------- |
| type         | type of Tab                                                                                                                             | string                              | card / border-card | -       |
| closable     | whether Tab is closable                                                                                                                 | boolean                             | -                  | -       |
| stretch      | whether width of tab automatically fits its container                                                                                   | boolean                             | -                  | false   |
| before-leave | hook function before switching tab. If `false` is returned or a `Promise` is returned and then is rejected, switching will be prevented | Function(activeName, oldActiveName) | -                  | -       |

### Events

| Name       | Description                                | Parameters              |
| ---------- | ------------------------------------------ | ----------------------- |
| tab-click  | triggers when a tab is clicked             | clicked tab             |
| tab-remove | triggers when tab-remove button is clicked | name of the removed tab |
