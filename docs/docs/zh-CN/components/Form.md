---
title: Form
meta:
  - name: description
    content: 封装表单组件实现通过配置动态生成表单
---

# Form

> 封装表单组件实现通过配置动态生成表单

::: tip 提示
适用于可以通过 `v-model` 绑定值的任意组件，例如：

- 支持 `el-input` `el-switch` ...
- 不支持 `el-upload` ... (需要将相关组件重新封装为支持 `v-model` 的组件)

:::

## 使用

### 基础用法

::: demo 传入 columns 数据，自动生成表单

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

::: demo 通过 columns 的 `component` 定义该项生成什么组件，要求对应组件可以通过 `v-model` 绑定值。通过 `props` 可以向组件中传值，通过 `props` 里面的 `slots` 可以向组件传递简单的[渲染函数](https://v3.cn.vuejs.org/guide/render-function.html)

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
          placeholder: '请输入内容',
          slots: {
            prefix: () => h('i', { className: 'el-input__icon el-icon-search' }),
            append: () => '搜索'
          },
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

### 使用局部组件

::: demo 通过 `component` 可以直接传入局部组件，但存在部分限制

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
    const columns7 = shallowRef([ // 需要通过 shallowRef 优化性能
      {
        label: 'radio',
        prop: 'radio',
        component: 'pro-radio',
        props: {
          data: list.value, // 引用其它值必须解构
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

### 使用插槽

::: demo 直接在模版中增加带 `[prop]` 相关的插槽即可自定义插槽。虽然在启用插槽后可以通过 `v-model="form.slot"` 这种方式绑定值，但更推荐使用 `value` 与 `setValue`

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

### 配置

| 参数                    | 说明                                                                    | 类型    | 可选值                                              | 默认值 |
| :---------------------- | :---------------------------------------------------------------------- | :------ | :-------------------------------------------------- | :----- |
| v-model                 | 绑定值                                                                  | array   | -                                                   | -      |
| columns                 | 表单配置参考下面 `columns`                                              | array   | -                                                   | -      |
| menu                    | 按钮配置参考下面 `menu`                                                 | object  | -                                                   | -      |
| rules                   | 表单验证规则                                                            | object  | -                                                   | -      |
| inline                  | 行内表单模式                                                            | boolean | -                                                   | false  |
| label-position          | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width` | string  | right / left / top                                  | right  |
| label-width             | 表单域标签的宽度，例如 '50px' 或 'auto'                                 | string  | -                                                   | -      |
| label-suffix            | 表单域标签的后缀                                                        | string  | -                                                   | -      |
| hide-required-asterisk  | 是否显示必填字段的标签旁边的红色星号                                    | boolean | -                                                   | false  |
| show-message            | 是否显示校验错误信息                                                    | boolean | -                                                   | true   |
| inline-message          | 是否以行内形式展示校验信息                                              | boolean | -                                                   | false  |
| status-icon             | 是否在输入框中显示校验结果反馈图标                                      | boolean | -                                                   | false  |
| validate-on-rule-change | 是否在 `rules` 属性改变后立即触发一次验证                               | boolean | -                                                   | true   |
| size                    | 用于控制该表单内组件的尺寸                                              | string  | medium / small / mini                               | -      |
| disabled                | 是否禁用该表单内的所有组件                                              | boolean | -                                                   | false  |
| gutter                  | 栅格间隔                                                                | number  | -                                                   | 0      |
| justify                 | flex 布局下的水平排列方式                                               | string  | start / end / center / space-around / space-between | start  |
| align                   | flex 布局下的垂直排列方式                                               | string  | top / middle / bottom                               | top    |

#### columns 的参数

| 参数          | 说明                                                                      | 类型               | 可选值                | 默认值 |
| :------------ | :------------------------------------------------------------------------ | :----------------- | :-------------------- | :----- |
| prop          | v-model 绑定的字段名 (**必填，需要是唯一值**)                             | string             | -                     | -      |
| label         | 标签文本                                                                  | string             | -                     | -      |
| component     | 当前项对应的组件，可以直接传入局部组件                                    | string / Component | -                     | -      |
| props         | 传递的对应的组件的参数                                                    | object             | -                     | -      |
| children      | 实现子表单                                                                | array              | -                     | -      |
| max           | 与 children 一起使用，限制子表单的最大数量                                | number             | -                     | -      |
| labelWidth    | 表单域标签的宽度，例如 '50px' 或 'auto'                                   | string             | -                     | -      |
| required      | 是否必填，如不设置，则会根据校验规则自动生成                              | boolean            | -                     | false  |
| rules         | 表单验证规则                                                              | object / array     | -                     | -      |
| error         | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息 | string             | -                     | -      |
| showMessage   | 是否显示校验错误信息                                                      | boolean            | -                     | true   |
| inlineMessage | 以行内形式展示校验信息                                                    | boolean            | -                     | false  |
| size          | 用于控制该表单域下组件的尺寸                                              | string             | medium / small / mini | -      |
| span          | 栅格占据的列数                                                            | number             | -                     | 24     |
| offset        | 栅格左侧的间隔格数                                                        | number             | -                     | 0      |
| push          | 栅格向右移动格数                                                          | number             | -                     | 0      |
| pull          | 栅格向左移动格数                                                          | number             | -                     | 0      |
| xs            | `<768px` 响应式栅格数或者栅格属性对象                                     | number / object    | -                     | -      |
| sm            | `≥768px` 响应式栅格数或者栅格属性对象                                     | number / object    | -                     | -      |
| md            | `≥992px` 响应式栅格数或者栅格属性对象                                     | number / object    | -                     | -      |
| lg            | `≥1200px` 响应式栅格数或者栅格属性对象                                    | number / object    | -                     | -      |
| xl            | `≥1920px` 响应式栅格数或者栅格属性对象                                    | number / object    | -                     | -      |

::: tip 关于 props
props 的属性将全部传递给 component 指定的组件

- 对于存在连字符的属性，可以通过字符串包裹或者转换为驼峰结构
- 通过 `slots` 可以向组件传递简单的[渲染函数](https://v3.cn.vuejs.org/guide/render-function.html)
- **对于事件需要通过 `on[Event]` 驼峰这种形式绑定。如：`change` -> `onChange`, `input` -> `onInput`**

```js
props: {
  clearable: true,
  'prefix-icon': 'el-icon-search',
  suffixIcon: 'el-icon-date',
  slots: {
    prefix: () => h('i', { className: 'el-input__icon el-icon-search' }),
    append: () => '搜索'
  },
  onChange: e => console.log(e),
}
```

:::

#### menu 的参数

| 参数        | 说明                              | 类型    | 可选值 | 默认值              |
| :---------- | :-------------------------------- | :------ | :----- | :------------------ |
| submit      | 是否显示 submit 按钮              | boolean | -      | true                |
| submitText  | submit 按钮显示的文字             | string  | -      | Submit              |
| submitProps | submit 按钮的配置，参考 el-button | object  | -      | { type: 'primary' } |
| reset       | 是否显示 reset 按钮               | boolean | -      | true                |
| resetText   | 是否显示 reset 按钮显示的文字     | string  | -      | Reset               |
| resetProps  | reset 按钮的配置，参考 el-button  | object  | -      | -                   |

### 事件

| 事件名   | 说明                   | 参数                                           |
| -------- | ---------------------- | ---------------------------------------------- |
| submit   | submit 被点击后触发    | done, isValid, invalidFields                   |
| reset    | reset 按钮被点击后触发 | -                                              |
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值, isValid, invalidFields |

### 方法

| 方法名        | 说明                                                                                                                                                                 | 参数                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))                              |
| validateField | 对部分表单字段进行校验的方法                                                                                                                                         | Function(props: array \| string, callback: Function(errorMessage: string)) |
| resetFields   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                                                                                           | -                                                                          |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果                                                             | Function(props: array \| string)                                           |

::: tip 提示
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

### 插槽

| name         | 说明                                                           |
| :----------- | :------------------------------------------------------------- |
| -            | 在底部菜单前插入的任意内容                                     |
| menu-left    | 表单底部按钮左侧                                               |
| menu-right   | 表单底部按钮右侧                                               |
| [prop]       | 当前这项的 Form Item 的内容，参数为 { item, value, setValue }  |
| [prop]-label | 当前这项的标签文本的内容，参数为 { item }                      |
| [prop]-error | 当前这项的自定义表单校验信息的显示方式，参数为 { error, item } |

::: tip 提示
[prop] 为 columns 中定义的 prop
:::
