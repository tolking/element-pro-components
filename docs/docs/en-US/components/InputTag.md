---
title: InputTag
meta:
  - name: description
    content: Enter an array of tags
---

# InputTag

> Enter an array of tags

## Use

### Basic Use

When using `pro-input-tag`, most attribute of `type="text"` are supported

::: demo

<template>
  <pro-input-tag
    v-model="inputTags"
    placeholder="Please click the space button after input"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputTags = ref([])

    return {
      inputTags
    }
  }
}
</script>

:::

### Trigger by Enter

Input is triggered by the space bar by default, Set `trigger="enter"` attribute to enable trigger by `Enter`

::: demo

<template>
  <pro-input-tag
    v-model="inputTags1"
    trigger="enter"
    placeholder="Please click the enter button after input"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputTags1 = ref([])

    return {
      inputTags1
    }
  }
}
</script>

:::

### Limit max tags

The max number of tags that can be entered can be configured through `max`

::: demo

<template>
  <pro-input-tag
    v-model="inputTags3"
    :max="3"
    placeholder="Enter up to 3 tags"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputTags3 = ref([])

    return {
      inputTags3
    }
  }
}
</script>

:::

### Component Size

Set `size` attribute to change the size of Input and Tag

::: demo

<template>
  <pro-input-tag
    v-for="item in sizeList"
    v-model="inputTags2"
    :key="item"
    :size="item"
    placeholder="Please click the space button after input"
    class="input-tag-size"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const inputTags2 = ref([])
    const sizeList = ['medium', 'small', 'mini']

    return {
      inputTags2,
      sizeList,
    }
  }
}
</script>

<style>
.input-tag-size {
  margin-bottom: 10px;
}
.input-tag-size:last-child {
  margin-bottom: 0;
}
</style>

:::

### Autocomplete

When using `pro-autocomplete-tag`, most attribute of `ElAutocomplete` are supported

::: demo

<template>
  <pro-autocomplete-tag
    v-model="autocompleteTags"
    :fetch-suggestions="querySearch"
    placeholder="Please click the space button after input"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const autocompleteTags = ref([])
    const list = [
      { value: 'Go', tag: 'go' },
      { value: 'JavaScript', tag: 'javascript' },
      { value: 'Python', tag: 'python' },
    ]

    function querySearch(queryString, cb) {
      cb(queryString ? list.filter(i => {
        return i.value.indexOf(queryString.toLowerCase()) === 0
      }) : list)
    }

    return {
      autocompleteTags,
      list,
      querySearch,
    }
  }
}
</script>

:::

### InputTag Props

| Name            | Description                          | Type    | Options                           | Default |
| :-------------- | :----------------------------------- | :------ | :-------------------------------- | :------ |
| v-model         | binding value                        | array   | -                                 | -       |
| trigger         | the key to trigger input tag         | string  | space / enter                     | space   |
| max             | max number tags that can be enter    | number  | -                                 | -       |
| size            | component size                       | string  | medium / small / mini             | -       |
| type            | tag Type                             | string  | success / info / warning / danger | -       |
| hit             | whether Tag has a highlighted border | boolean | -                                 | false   |
| color           | background color of the Tag          | string  | -                                 | -       |
| effect          | component theme of the Tag           | string  | dark / light / plain              | light   |
| maxlength       | maximum Input text length            | number  | -                                 | -       |
| minlength       | minimum Input text length            | number  | -                                 | -       |
| show-word-limit | whether show word count              | boolean | -                                 | false   |
| placeholder     | placeholder of Input                 | string  | -                                 | -       |
| clearable       | whether to show clear button         | boolean | -                                 | false   |
| disabled        | whether disabled                     | boolean | -                                 | false   |
| prefix-icon     | prefix icon class                    | string  | -                                 | -       |
| suffix-icon     | suffix icon class                    | string  | -                                 | -       |
| autocomplete    | same as autocomplete in native input | string  | on / off                          | off     |
| name            | same as name in native input         | string  | -                                 | -       |
| readonly        | same as readonly in native input     | boolean | -                                 | false   |
| autofocus       | same as autofocus in native input    | boolean | -                                 | false   |
| form            | same as form in native input         | string  | -                                 | -       |
| label           | label text                           | string  | -                                 | -       |
| tabindex        | input tabindex                       | string  | -                                 | -       |
| validate-event  | whether to trigger form validation   | boolean | -                                 | true    |
| input-style     | the style of input                   | object  | -                                 | -       |

## AutocompleteTag

> Enter an array of tags with some recommended tips

### AutocompleteTag Props

| Name                  | Description                                                                                                                | Type                            | Options                                                        | Default      |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------- | :------------------------------ | :------------------------------------------------------------- | :----------- |
| v-model               | binding value                                                                                                              | array                           | -                                                              | -            |
| trigger               | the key to trigger input tag                                                                                               | string                          | space / enter                                                  | space        |
| max                   | max number that can be enter                                                                                               | number                          | -                                                              | -            |
| size                  | component size                                                                                                             | string                          | medium / small / mini                                          | -            |
| type                  | tag Type                                                                                                                   | string                          | success / info / warning / danger                              | -            |
| hit                   | whether Tag has a highlighted border                                                                                       | boolean                         | -                                                              | false        |
| color                 | background color of the Tag                                                                                                | string                          | -                                                              | -            |
| effect                | component theme of the Tag                                                                                                 | string                          | dark / light / plain                                           | light        |
| placeholder           | placeholder of Input                                                                                                       | string                          | -                                                              | -            |
| disabled              | whether disabled                                                                                                           | boolean                         | -                                                              | false        |
| value-key             | key name of the input suggestion object for display                                                                        | string                          | -                                                              | value        |
| debounce              | debounce delay when typing, in milliseconds                                                                                | number                          | -                                                              | 300          |
| placement             | placement of the popup menu                                                                                                | string                          | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-start |
| fetch-suggestions     | a method to fetch input suggestions. When suggestions are ready, invoke callback(data:[]) to return them to Autocomplete   | Function(queryString, callback) | -                                                              | -            |
| popper-class          | custom class name for autocomplete's dropdown                                                                              | string                          | -                                                              | -            |
| trigger-on-focus      | whether show suggestions when input focus                                                                                  | boolean                         | -                                                              | true         |
| name                  | same as name in native input                                                                                               | string                          | -                                                              | -            |
| select-when-unmatched | whether to emit a select event on enter when there is no autocomplete match                                                | boolean                         | -                                                              | false        |
| label                 | label text                                                                                                                 | string                          | -                                                              | -            |
| prefix-icon           | prefix icon class                                                                                                          | string                          | -                                                              | -            |
| suffix-icon           | suffix icon class                                                                                                          | string                          | -                                                              | -            |
| hide-loading          | whether to hide the loading icon in remote search                                                                          | boolean                         | -                                                              | false        |
| popper-append-to-body | whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false | boolean                         | -                                                              | false        |
| highlight-first-item  | whether to highlight first item in remote search suggestions by default                                                    | boolean                         | -                                                              | false        |
