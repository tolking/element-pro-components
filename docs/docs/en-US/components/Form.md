---
title: Form
meta:
  - name: description
    content: Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data
---

# Form

> Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data

::: tip Tip
Applicable to any component that can bind value ​​through `v-model`. example:

- Support `el-input` `el-switch` ...
- Not support `el-upload` ... (The relevant components need to be rewritten to support `v-model` components)

:::

## Use

### Basic Use

::: demo Set `columns` attribute will automatic generate form

<template>
  <pro-form
    v-model="form"
    :columns="columns"
    label-width="100px"
    @submit="submit"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form = ref({})
    const columns = ref([
      {
        label: 'Name',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: 'Address',
        prop: 'address',
        component: 'el-input',
      },
    ])
    const submit = (done, isValid, invalidFields) => {
      console.log(isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    return {
      form,
      columns,
      submit,
    }
  }
}
</script>

:::

### Custom Component

::: demo Set `component` in `columns` attribute to dfine what component the item generates, that component should can bind value ​​through `v-model`. props ​​can be passed to the component through `props`, [render-function](https://v3.cn.vuejs.org/guide/render-function.html) can be passed to the component thrrough `slots` in `props`

<template>
  <pro-form
    v-model="form1"
    :columns="columns1"
    label-width="100px"
  />
</template>

<script>
import { h, ref } from 'vue'

export default {
  setup() {
    const form1 = ref({})
    const list = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])
    const columns1 = ref([
      {
        label: 'input',
        prop: 'input',
        component: 'el-input',
        props: {
          clearable: true,
          placeholder: 'Please input',
          slots: {
            prefix: () => h('i', { className: 'el-input__icon el-icon-search' }),
            append: () => 'Search'
          },
        },
      },
      {
        label: 'input-tag',
        prop: 'inputTag',
        component: 'pro-input-tag',
        props: {
          placeholder: 'Please click the space button after input',
        },
      },
      {
        label: 'radio',
        prop: 'radio',
        component: 'pro-radio',
        props: {
          data: list,
        },
      },
      {
        label: 'checkbox',
        prop: 'checkbox',
        component: 'pro-checkbox',
        props: {
          data: list,
        },
      },
      {
        label: 'select',
        prop: 'select',
        component: 'pro-select',
        props: {
          data: list,
        },
      },
    ])

    return {
      form1,
      columns1,
    }
  }
}
</script>

:::

### Custom local component

::: demo Local component can be passed directly through `component` in `columns` attribute, but there are some restrictions

<template>
  <pro-form
    v-model="form7"
    :columns="columns7"
    :gutter="20"
    label-width="100px"
    @submit="submit"
  />
</template>

<script>
import { ref, shallowRef } from 'vue'
import { ElSwitch } from 'element-plus'

export default {
  setup() {
    const list = ref([
      { value: 'Go', label: 'go' },
      { value: 'JavaScript', label: 'javascript' },
      { value: 'Python', label: 'python' },
      { value: 'Dart', label: 'dart' },
      { value: 'V', label: 'v' },
    ])
    const form7 = ref({})
    const columns7 = shallowRef([ // Need to optimize performance through shallowRef
      {
        label: 'radio',
        prop: 'radio',
        component: 'pro-radio',
        props: {
          data: list.value, // Must be deconstructed when referencing a value
        },
      },
      {
        label: 'switch',
        prop: 'switch',
        component: ElSwitch,
      }
    ])

    return {
      form7,
      columns7,
    }
  }
}
</script>

:::

### Slots

::: demo Directly add some slot with `[prop]` in the template

<template>
  <pro-form
    v-model="form2"
    :columns="columns2"
    label-width="100px"
  >
    <template #slot-label>
      <i class="el-icon-picture-outline" />
      <span>picture</span>
    </template>
    <template #slot="{ value, setValue }">
      <el-upload
        class="avatar-uploader"
        action=""
        :show-file-list="false"
        :before-upload="(file) => beforeUpload(file, setValue)"
      >
        <img
          v-if="value"
          :src="value"
          class="avatar"
        >
        <i
          v-else
          class="el-icon-plus avatar-uploader-icon"
        />
      </el-upload>
    </template>
  </pro-form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form2 = ref({})
    const columns2 = ref([
      {
        prop: 'slot',
      },
    ])

    function beforeUpload(file, setValue) {
      // Simulate uploading pictures
      const fileReader = new FileReader()
      fileReader.onloadend = e => setValue(e.target.result)
      fileReader.readAsDataURL(file)
      return false
    }

    return {
      form2,
      columns2,
      beforeUpload,
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

:::

### Custom Menu

::: demo Set `menu` attribute to enable custom menu

<template>
  <pro-form
    v-model="form"
    :columns="columns"
    :menu="menu"
    label-width="100px"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const menu = {
      submitText: 'Create',
      reset: false,
    }
    const form = ref({})
    const columns = ref([
      {
        label: 'Name',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: 'Address',
        prop: 'address',
        component: 'el-input',
      },
    ])

    return {
      menu,
      form,
      columns,
    }
  }
}
</script>

:::

### Custom children form

::: demo Set `children` in `columns` attribute to enable custom children form

<template>
  <pro-form
    v-model="form3"
    :columns="columns3"
    label-width="100px"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form3 = ref({})
    const columns3 = ref([
      {
        label: 'Goods',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: 'Spec',
        prop: 'spec',
        size: 'small',
        max: 3,
        children: [
          {
            label: 'Weight',
            prop: 'weight',
            component: 'el-input',
          },
          {
            label: 'Size',
            prop: 'size',
            max: 1,
            children: [
              {
                label: 'Length',
                prop: 'length',
                component: 'el-input',
              },
              {
                label: 'Width',
                prop: 'width',
                component: 'el-input',
              },
              {
                label: 'Height',
                prop: 'height',
                component: 'el-input',
              },
            ]
          },
        ],
      },
    ])

    return {
      form3,
      columns3,
    }
  }
}
</script>

:::

### Validation

::: demo Set `rules` attribute to enable validation, or Set `rules` in `columns` attribute to enable validation

<template>
  <pro-form
    v-model="form4"
    :columns="columns4"
    :rules="rules"
    label-width="100px"
    @submit="submitForm"
    @reset="resetForm"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form4 = ref({})
    const rules = ref({
      date: { required: true, message: 'Please input date', trigger: 'blur' },
      user: { required: true, message: 'Please input user', trigger: 'blur' },
    })
    const columns4 = ref([
      {
        label: 'Date',
        prop: 'date',
        component: 'el-input',
      },
      {
        label: 'User',
        prop: 'user',
        max: 3,
        size: 'small',
        children: [
          {
            label: 'Name',
            prop: 'name',
            component: 'el-input',
            rules: { required: true, message: 'Please input Name', trigger: 'blur' },
          },
          {
            label: 'Address',
            prop: 'address',
            component: 'el-input',
          },
        ],
      },
    ])

    function submitForm(done, isValid, invalidFields) {
      if (isValid) {
        alert('submit!')
      } else {
        console.log('error submit!!')
      }
      done()
    }

    function resetForm() {
      console.log('reset form')
    }

    return {
      form4,
      columns4,
      submitForm,
      resetForm,
    }
  }
}
</script>

:::

### Dynamically Form

::: demo If the columns with reactive, the dynamically modified columns form will also change accordingly. So you can dynamically control the content of the form as needed, or create form from ajax

<template>
  <pro-form
    v-model="form5"
    :columns="columns5"
    :menu="menu5"
    label-width="100px"
  >
    <template #menu-left>
      <el-button
        v-show="columns5.length < 5"
        @click="add"
      >
        Add One
      </el-button>
    </template>
    <template #menu-right>
      <el-button
        v-show="columns5.length"
        @click="del"
      >
        Delete One
      </el-button>
    </template>
  </pro-form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const menu5 = {
      submit: false,
      reset: false,
    }
    const count = ref(0)
    const form5 = ref({})
    const columns5 = ref([
      {
        label: 'Label-0',
        prop: 'prop0',
        component: 'el-input',
      },
    ])

    function add() {
      count.value++
      columns5.value.push({
        label: 'Label-' + count.value,
        prop: 'prop' + count.value,
        component: 'el-input',
      })
    }

    function del() {
      const index = Math.floor(Math.random() * columns5.value.length)
      columns5.value.splice(index, 1)
    }

    return {
      menu5,
      form5,
      columns5,
      add,
      del,
    }
  }
}
</script>

:::

### Layout

::: demo Use the same way as `el-row` `el-col` (`el-row` corresponds to `pro-form`; `el-col` corresponds to `columns`) **Invalid when `inline` is `true`**

<template>
  <pro-form
    v-model="form6"
    :columns="columns6"
    :gutter="20"
    label-width="100px"
    @submit="submit"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const form6 = ref({})
    const columns6 = ref([
      {
        label: 'Goods',
        prop: 'name',
        component: 'el-input',
        span: 24,
      },
      {
        label: 'Weight',
        prop: 'weight',
        component: 'el-input',
        xs: 24,
        md: 12,
      },
      {
        label: 'Count',
        prop: 'count',
        component: 'el-input',
        xs: 24,
        md: 12,
      },
      {
        label: 'Length',
        prop: 'length',
        component: 'el-input',
        xs: 24,
        md: 8,
      },
      {
        label: 'Width',
        prop: 'width',
        component: 'el-input',
        xs: 24,
        md: 8,
      },
      {
        label: 'Height',
        prop: 'height',
        component: 'el-input',
        xs: 24,
        md: 8,
      },
      {
        label: 'Price',
        prop: 'price',
        component: 'el-input',
        xs: 24,
        md: 12,
      },
      {
        label: 'MarketPrice',
        prop: 'marketPrice',
        component: 'el-input',
        xs: 24,
        md: 12,
      },
    ])
    const submit = (done, isValid, invalidFields) => {
      console.log(isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    return {
      form6,
      columns6,
      submit,
    }
  }
}
</script>

:::

### Props

| Name                    | Description                                                                                                                       | Type    | Options                                             | Default |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :------ | :-------------------------------------------------- | :------ |
| v-model                 | binding value                                                                                                                     | array   | -                                                   | -       |
| columns                 | to generate form components, reference `columns`                                                                                  | array   | -                                                   | -       |
| menu                    | config the menu content, reference `menu`                                                                                         | object  | -                                                   | -       |
| rules                   | validation rules of form                                                                                                          | object  | -                                                   | -       |
| inline                  | whether the form is inline                                                                                                        | boolean | -                                                   | false   |
| label-position          | position of label. If set to 'left' or 'right', `label-width` prop is also required                                               | string  | right / left / top                                  | right   |
| label-width             | width of label, e.g. '50px'. All its direct child form items will inherit this value. Width `auto` is supported.                  | string  | —                                                   | —       |
| label-suffix            | suffix of the label                                                                                                               | string  | —                                                   | —       |
| hide-required-asterisk  | whether required fields should have a red asterisk (star) beside their labels                                                     | boolean | —                                                   | false   |
| show-message            | whether to show the error message                                                                                                 | boolean | —                                                   | true    |
| inline-message          | whether to display the error message inline with the form item                                                                    | boolean | —                                                   | false   |
| status-icon             | whether to display an icon indicating the validation result                                                                       | boolean | —                                                   | false   |
| validate-on-rule-change | whether to trigger validation when the `rules` prop is changed                                                                    | boolean | —                                                   | true    |
| size                    | control the size of components in this form                                                                                       | string  | medium / small / mini                               | —       |
| disabled                | whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components' `disabled` prop | boolean | —                                                   | false   |
| gutter                  | grid spacing                                                                                                                      | number  | —                                                   | 0       |
| justify                 | horizontal alignment of flex layout                                                                                               | string  | start / end / center / space-around / space-between | start   |
| align                   | vertical alignment of flex layout                                                                                                 | string  | top / middle / bottom                               | top     |

#### columns

| Name          | Description                                                                                            | Type                                        | Options               | Default |
| :------------ | :----------------------------------------------------------------------------------------------------- | :------------------------------------------ | :-------------------- | :------ |
| prop          | a key of `v-model`                                                                                     | string                                      | -                     | -       |
| label         | label text                                                                                             | string                                      | —                     | —       |
| component     | binding component                                                                                      | string                                      | -                     | -       |
| props         | transfer `props` to the current component                                                              | object                                      | -                     | -       |
| children      | sub-columns                                                                                            | array                                       | -                     | -       |
| max           | limit the maximum number of sub-columns                                                                | number                                      | -                     | -       |
| labelWidth    | width of label, e.g. '50px'. Width `auto` is supported.                                                | string                                      | —                     | —       |
| required      | whether the field is required or not, will be determined by validation rules if omitted                | boolean                                     | —                     | false   |
| rules         | validation rules of form                                                                               | object                                      | —                     | —       |
| error         | field error message, set its value and the field will validate error and show this message immediately | string                                      | —                     | —       |
| showMessage   | whether to show the error message                                                                      | boolean                                     | —                     | true    |
| inlineMessage | inline style validate message                                                                          | boolean                                     | —                     | false   |
| size          | control the size of components in this form-item                                                       | string                                      | medium / small / mini | -       |
| span          | number of column the grid spans                                                                        | number                                      | —                     | 24      |
| offset        | number of spacing on the left side of the grid                                                         | number                                      | —                     | 0       |
| push          | number of columns that grid moves to the right                                                         | number                                      | —                     | 0       |
| pull          | number of columns that grid moves to the left                                                          | number                                      | —                     | 0       |
| xs            | `<768px` Responsive columns or column props object                                                     | number / object (e.g. {span: 4, offset: 4}) | —                     | —       |
| sm            | `≥768px` Responsive columns or column props object                                                     | number / object (e.g. {span: 4, offset: 4}) | —                     | —       |
| md            | `≥992px` Responsive columns or column props object                                                     | number / object (e.g. {span: 4, offset: 4}) | —                     | —       |
| lg            | `≥1200px` Responsive columns or column props object                                                    | number / object (e.g. {span: 4, offset: 4}) | —                     | —       |
| xl            | `≥1920px` Responsive columns or column props object                                                    | number / object (e.g. {span: 4, offset: 4}) | —                     | —       |

::: tip about props
The props attribute will all be passed to the component. **For events need to be bound by `on[Event]`. example: `change` -> `onChange`, `input` -> `onInput`**

```js
props: {
  clearable: true,
  'prefix-icon': 'el-icon-search',
  suffixIcon: 'el-icon-date',
  onChange: e => console.log(e),
}
```

:::

#### menu

| Name        | Description                                       | Type    | Options | Default             |
| :---------- | :------------------------------------------------ | :------ | :------ | :------------------ |
| submit      | whether to display a submit button                | boolean | -       | true                |
| submitText  | the text of submit button                         | string  | -       | Submit              |
| submitProps | the props of submit button, reference `el-button` | object  | -       | { type: 'primary' } |
| reset       | Whether to display a reset button                 | boolean | -       | true                |
| resetText   | the text of reset button                          | string  | -       | Reset               |
| resetProps  | the props of reset button, reference `el-button`  | object  | -       | -                   |

### Events

| Name     | Description                             | Parameters                                                                                            |
| -------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| submit   | triggers when the submit click          | done, isValid, invalidFields                                                                          |
| reset    | triggers when the reset click           | -                                                                                                     |
| validate | triggers after a form item is validated | prop name of the form item being validated, whether validation is passed and the error message if not |

### Methods

| Name          | Description                                                                                                                                                                                                                                                                      | Name                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| validate      | validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted | Function(callback: Function(boolean, object))                              |
| validateField | validate one or several form items                                                                                                                                                                                                                                               | Function(props: string \| array, callback: Function(errorMessage: string)) |
| resetFields   | reset all the fields and remove validation result                                                                                                                                                                                                                                | —                                                                          |
| clearValidate | clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared                                                     | Function(props: string \| array)                                           |

::: tip Tip
If you use `typescript`, you can export `IFormExpose` from the component to provide better type inference. example:

```vue
<template>
  <pro-form ref="ruleForm" v-model="form" :columns="columns" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { IFormExpose } from 'element-pro-components'

export default defineComponent({
  setup() {
    const ruleForm = ref<IFormExpose>({} as IFormExpose)
    // code...

    function submitForm() {
      ruleForm.value
        .validate()
        .then(() => {
          alert('submit!')
        })
        .catch(() => {
          console.log('error submit!!')
        })
    }

    return { ruleForm, submitForm }
  },
})
</script>
```

:::

### Slots

| Name         | Description                                                              |
| :----------- | :----------------------------------------------------------------------- |
| -            | anything inserted before the menu                                        |
| menu-left    | control the menu left display content                                    |
| menu-right   | control the menu right display content                                   |
| [prop]       | control the `Item` display content, parameters { item, value, setValue } |
| [prop]-label | control the `Item` label display content, parameters { item }            |
| [prop]-error | control the `Item` error display content, parameters { error, item }     |

::: tip Tip
[prop] the prop of columns
:::
