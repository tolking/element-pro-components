# Form

> Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data

::: tip Tip
自动代理通过 `v-model` 绑定值且不带插槽就能够实现功能的任意第三方组件，例如：

- 支持 `el-input` `el-switch` 等
- 不支持 `el-upload` `el-select` `el-radio-group` `el-checkbox-group` `input` 等

使用相关 `pro-select` `pro-radio` `pro-checkbox` 或其它第三方组件代替
:::

::: warning 警告
在使用组件前，你必须通过全局注册它

```js
import { ElInput } from 'element-plus'

app.use(ElInput)
// 或者
app.component(ElInput.name, ElInput)
```

:::

# Use

## Basic Use

::: demo 传入 columns 数据，自动生成表单。操作按钮需要通过 menu 插槽传入

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
        label: '名字',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: '地址',
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

### 指定对应的组件

::: demo 通过 columns 的 `component` 定义该项生成什么组件，通过 `props` 可以向组件中传值。要求对应组件可以通过 v-model 绑定值

<template>
  <pro-form
    v-model="form1"
    :columns="columns1"
    label-width="100px"
  />
</template>

<script>
import { ref } from 'vue'

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
          placeholder: '请输入内容',
        },
      },
      {
        label: 'input-tag',
        prop: 'inputTag',
        component: 'pro-input-tag',
        props: {
          placeholder: '请输入内容后点击空格按键',
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

### 启用插槽

::: demo 通过 columns 的 slot 配置是否开启自定义插槽功能。虽然在启用插槽后可以通过 `v-model="form.slot"` 这种方式绑定值，但更推荐使用 `value` 与 `setValue`

<template>
  <pro-form
    v-model="form2"
    :columns="columns2"
    label-width="100px"
  >
    <template #slot-label>
      <i class="el-icon-picture-outline" />
      <span>图片</span>
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
        slot: true,
      },
    ])

    function beforeUpload(file, setValue) {
      // 模拟上传图片
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

### 配置按钮

::: demo 通过 menu 配置按钮

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
      submitText: '提交',
      reset: false,
    }
    const form = ref({})
    const columns = ref([
      {
        label: '名字',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: '地址',
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

### 配置子表单

::: demo 通过 columns 的 `children` 配置子表单，当然你也可以配置多层的 `children` 结构实现反复套娃

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
        label: '商品名',
        prop: 'name',
        component: 'el-input',
      },
      {
        label: '规格',
        prop: 'spec',
        size: 'small',
        max: 3,
        children: [
          {
            label: '重量',
            prop: 'weight',
            component: 'el-input',
          },
          {
            label: '尺寸',
            prop: 'size',
            max: 1,
            children: [
              {
                label: '长',
                prop: 'length',
                component: 'el-input',
              },
              {
                label: '宽',
                prop: 'width',
                component: 'el-input',
              },
              {
                label: '高',
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

### 表单验证

::: demo 像 el-form 一样可以通过 `rules` 配置表单验证。对于子表单更推荐使用 columns 里面的 `rules` 字段实现验证。否则你需要通过 `${父级的 prop}.${当前项的 index}.${当前的 prop}` 这种方式配置子表单的验证

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
      date: { required: true, message: '日期不能为空', trigger: 'blur' },
      user: { required: true, message: '用户不能为空', trigger: 'blur' },
    })
    const columns4 = ref([
      {
        label: '日期',
        prop: 'date',
        component: 'el-input',
      },
      {
        label: '用户',
        prop: 'user',
        max: 3,
        size: 'small',
        children: [
          {
            label: '名字',
            prop: 'name',
            component: 'el-input',
            rules: { required: true, message: '名字不能为空', trigger: 'blur' },
          },
          {
            label: '地址',
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

### 动态表单

::: demo 如果传入的 `columns` 是一个响应性数据，动态的修改 columns 表单也会随之改变。由此你可以根据需要动态的控制表单的内容，或者实现从后台加载数据实现表单

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
        增加
      </el-button>
    </template>
    <template #menu-right>
      <el-button
        v-show="columns5.length"
        @click="del"
      >
        减少
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
        label: '项-0',
        prop: 'prop0',
        component: 'el-input',
      },
    ])

    function add() {
      count.value++
      columns5.value.push({
        label: '项-' + count.value,
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

### 栅格布局

::: demo 与使用 `el-row` 和 `el-col` 组件相同 (`el-row` 对应 `pro-form`；`el-col` 对应 `columns`)，通过相关配置可以自由地组合布局。**当 `inline` 为 `true` 时无效**

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
        label: '商品名',
        prop: 'name',
        component: 'el-input',
        span: 24,
      },
      {
        label: '重量',
        prop: 'weight',
        component: 'el-input',
        xs: 24,
        md: 12,
      },
      {
        label: '数量',
        prop: 'count',
        component: 'el-input',
        xs: 24,
        md: 12,
      },
      {
        label: '长',
        prop: 'length',
        component: 'el-input',
        xs: 24,
        md: 8,
      },
      {
        label: '宽',
        prop: 'width',
        component: 'el-input',
        xs: 24,
        md: 8,
      },
      {
        label: '高',
        prop: 'height',
        component: 'el-input',
        xs: 24,
        md: 8,
      },
      {
        label: '销售价',
        prop: 'price',
        component: 'el-input',
        xs: 24,
        md: 12,
      },
      {
        label: '市场价',
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
| type                    | layout mode, you can use flex, works in modern browsers                                                                           | string  | —                                                   | —       |
| justify                 | horizontal alignment of flex layout                                                                                               | string  | start / end / center / space-around / space-between | start   |
| align                   | vertical alignment of flex layout                                                                                                 | string  | top / middle / bottom                               | top     |

#### columns

| Name          | Description                                                                                            | Type                                        | Options               | Default |
| :------------ | :----------------------------------------------------------------------------------------------------- | :------------------------------------------ | :-------------------- | :------ |
| prop          | a key of `v-model`                                                                                     | string                                      | -                     | -       |
| label         | label text                                                                                             | string                                      | —                     | —       |
| component     | binding component                                                                                      | string                                      | -                     | -       |
| props         | transfer `props` to the current component                                                              | object                                      | -                     | -       |
| slot          | whether to enable slot                                                                                 | boolean                                     | -                     | false   |
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

::: tip 关于 props
props 的属性将全部传递给 component 指定的组件。**对于事件需要通过 `on[Event]` 驼峰这种形式绑定。如：`change` -> `onChange`, `input` -> `onInput`**

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
如果使用 `typescript` 可以从组件中导出 `IFormExpose` 提供更好的类型推导。参考如下在 setup 中使用

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
