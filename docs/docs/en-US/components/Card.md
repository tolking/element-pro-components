---
title: Card
meta:
  - name: description
    content: Integrate information in a card container, and supporting simple layouts
---

# Card

> Integrate information in a card container, and supporting simple layouts

## Use

### Basic Use

When used alone it is not much different from using ElCard directly

::: demo
@/demo/Card/base.vue
:::

### Custom Shadow

Set `shadow` attribute to define when to show the card shadows

::: demo
@/demo/Card/shadow.vue
:::

## Custom Ghost

Set `ghost` attribute to make the background and border transparent

::: demo
@/demo/Card/ghost.vue
:::

### Layout

Use the same way as `el-row` `el-col` (`el-row` corresponds to the outer `pro-card`; `el-col` corresponds to the nested `pro-card`)

::: demo
@/demo/Card/layout.vue
:::

### Custom Direction

Set `direction` attribute to change the direction of layout

::: demo
@/demo/Card/direction.vue
:::

### Custom Split Card

Split Card are an enhancement to the layout

::: demo
@/demo/Card/split.vue
:::

### Nested

Achieve more complex layouts through nesting and flexible use of Card

::: demo
@/demo/Card/nested.vue
:::

### Props

| Name       | Description                                                                  | Type                                        | Options                                                              | Default               |
| :--------- | :--------------------------------------------------------------------------- | :------------------------------------------ | :------------------------------------------------------------------- | :-------------------- |
| header     | title of the card                                                            | string                                      | —                                                                    | —                     |
| body-style | CSS style of body                                                            | string / object / array                     | —                                                                    | `{ padding: '20px' }` |
| shadow     | when to show card shadows                                                    | string                                      | always / hover / never                                               | always                |
| ghost      | whether is ghost mode, make the background and border transparent            | boolean                                     | -                                                                    | false                 |
| split      | whether to split the card, takes effect when Card is nested inside           | boolean                                     | -                                                                    | false                 |
| gutter     | grid spacing, takes effect when Card is nested inside                        | number                                      | —                                                                    | 0                     |
| justify    | horizontal alignment of flex layout, takes effect when Card is nested inside | string                                      | start / end / center / space-around / space-between / spacing-evenly | start                 |
| align      | vertical alignment of flex layout, takes effect when Card is nested inside   | string                                      | top / middle / bottom                                                | top                   |
| direction  | direction of Row, takes effect when Card is nested inside                    | string                                      | row / row-reverse / column / column-reverse                          | row                   |
| span       | number of column the grid spans                                              | number                                      | —                                                                    | 0                     |
| offset     | number of spacing on the left side of the grid                               | number                                      | —                                                                    | 0                     |
| push       | number of columns that grid moves to the right                               | number                                      | —                                                                    | 0                     |
| pull       | number of columns that grid moves to the left                                | number                                      | —                                                                    | 0                     |
| xs         | `<768px` Responsive columns or column props object                           | number / object (e.g. {span: 4, offset: 4}) | —                                                                    | —                     |
| sm         | `≥768px` Responsive columns or column props object                           | number / object (e.g. {span: 4, offset: 4}) | —                                                                    | —                     |
| md         | `≥992px` Responsive columns or column props object                           | number / object (e.g. {span: 4, offset: 4}) | —                                                                    | —                     |
| lg         | `≥1200px` Responsive columns or column props object                          | number / object (e.g. {span: 4, offset: 4}) | —                                                                    | —                     |
| xl         | `≥1920px` Responsive columns or column props object                          | number / object (e.g. {span: 4, offset: 4}) | —                                                                    | —                     |

## Slots

| Name   | Description               |
| ------ | ------------------------- |
| —      | customize default content |
| header | customize header content  |
