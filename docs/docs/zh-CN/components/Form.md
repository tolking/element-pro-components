# Form

> 封装表单组件实现通过配置动态生成表单

::: tip 提示
自动代理通过 `v-model` 绑定值且不带插槽就能够实现功能的任意第三方组件，例如：

- 支持 `el-input` `el-switch` 等
- 不支持 `el-upload` `el-select` `el-radio-group` `el-checkbox-group` `input` 等

使用相关 `pro-select` `pro-radio` `pro-checkbox` 或第三方组件代替不支持组件
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

## 使用

- 基础用法

::: demo 传入 columns 数据，自动生成表单。操作按钮需要通过 menu 插槽传入

<template>
  <pro-form
    v-model="form"
    :columns="columns"
    label-width="100px"
  >
    <template #menu>
      <el-button type="primary">提交</el-button>
      <el-button>取消</el-button>
    </template>
  </pro-form>
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

    return {
      form,
      columns,
    }
  }
}
</script>

:::

- 指定对应的组件

::: demo 通过 columns 的 `component` 定义该项生成什么组件，通过 `props` 可以向组件中传值。要求对应组件可以通过 v-model 绑定值

<template>
  <pro-form
    v-model="form1"
    :columns="columns1"
    label-width="100px"
  >
    <template #menu>
      <el-button type="primary">提交</el-button>
      <el-button>取消</el-button>
    </template>
  </pro-form>
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

- 启用插槽

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

:::

- 配置子表单

::: demo 通过 columns 的 `children` 配置子表单，当然你也可以配置多层的 `children` 结构实现反复套娃

<template>
  <pro-form
    v-model="form3"
    :columns="columns3"
    label-width="100px"
  >
    <template #menu>
      <el-button type="primary">提交</el-button>
      <el-button>取消</el-button>
    </template>
  </pro-form>
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

- 表单验证

::: demo 像 el-form 一样可以通过 `rules` 配置表单验证。对于子表单更推荐使用 columns 里面的 `rules` 字段实现验证。否则你需要通过 `${父级的 prop}.${当前项的 index}.${当前的 prop}` 这种方式配置子表单的验证

<template>
  <pro-form
    ref="ruleForm"
    v-model="form4"
    :columns="columns4"
    :rules="rules"
    label-width="100px"
  >
    <template #menu>
      <el-button
        type="primary"
        @click="submitForm"
      >
        提交
      </el-button>
      <el-button @click="resetForm">
        取消
      </el-button>
    </template>
  </pro-form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const ruleForm = ref({})
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

    function submitForm() {
      ruleForm.value.validate().then(() => {
        alert('submit!')
      }).catch(() => {
        console.log('error submit!!')
      })
    }

    function resetForm() {
      ruleForm.value.resetFields()
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

- 动态表单

::: demo 如果传入的 `columns` 是一个响应性数据，动态的修改 columns 表单也会随之改变。由此你可以根据需要动态的控制表单的内容，或者实现从后台加载数据实现表单

<template>
  <pro-form
    v-model="form5"
    :columns="columns5"
    label-width="100px"
  >
    <template #menu>
      <el-button
        v-show="columns5.length < 5"
        @click="add"
      >
        增加
      </el-button>
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
      form5,
      columns5,
      add,
      del,
    }
  }
}
</script>

:::

## 配置

| 参数                    | 说明                                                                    | 类型    | 可选值                | 默认值 |
| :---------------------- | :---------------------------------------------------------------------- | :------ | :-------------------- | :----- |
| v-model                 | 绑定值                                                                  | array   | -                     | -      |
| columns                 | 表单配置参考下面 `columns`                                              | array   | -                     | -      |
| rules                   | 表单验证规则                                                            | object  | -                     | -      |
| inline                  | 行内表单模式                                                            | boolean | -                     | false  |
| label-position          | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width` | string  | right / left / top    | right  |
| label-width             | 表单域标签的宽度，例如 '50px' 或 'auto'                                 | string  | -                     | -      |
| label-suffix            | 表单域标签的后缀                                                        | string  | -                     | -      |
| hide-required-asterisk  | 是否显示必填字段的标签旁边的红色星号                                    | boolean | -                     | false  |
| show-message            | 是否显示校验错误信息                                                    | boolean | -                     | true   |
| inline-message          | 是否以行内形式展示校验信息                                              | boolean | -                     | false  |
| status-icon             | 是否在输入框中显示校验结果反馈图标                                      | boolean | -                     | false  |
| validate-on-rule-change | 是否在 `rules` 属性改变后立即触发一次验证                               | boolean | -                     | true   |
| size                    | 用于控制该表单内组件的尺寸                                              | string  | medium / small / mini | -      |
| disabled                | 是否禁用该表单内的所有组件                                              | boolean | -                     | false  |

- columns 的参数

| 参数          | 说明                                                                      | 类型           | 可选值                | 默认值 |
| :------------ | :------------------------------------------------------------------------ | :------------- | :-------------------- | :----- |
| prop          | v-model 绑定的字段名                                                      | string         | -                     | -      |
| label         | 标签文本                                                                  | string         | -                     | -      |
| component     | 当前项对应的组件                                                          | string         | -                     | -      |
| props         | 传递的对应的组件的参数                                                    | object         | -                     | -      |
| slot          | 是否开启自定义插槽功能                                                    | boolean        | -                     | false  |
| children      | 实现子表单                                                                | array          | -                     | -      |
| max           | 与 children 一起使用，限制子表单的最大数量                                | number         | -                     | -      |
| labelWidth    | 表单域标签的宽度，例如 '50px' 或 'auto'                                   | string         | -                     | -      |
| required      | 是否必填，如不设置，则会根据校验规则自动生成                              | boolean        | -                     | false  |
| rules         | 表单验证规则                                                              | object / array | -                     | -      |
| error         | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息 | string         | -                     | -      |
| showMessage   | 是否显示校验错误信息                                                      | boolean        | -                     | true   |
| inlineMessage | 以行内形式展示校验信息                                                    | boolean        | -                     | false  |
| size          | 用于控制该表单域下组件的尺寸                                              | string         | medium / small / mini | -      |

::: tip 关于 props
props 的属性将全部传递给 component 指定的组件。**对于事件需要通过 `on[event]` 驼峰这种形式绑定。如：`change` -> `onChange`, `input` -> `onInput`**

```js
props: {
  clearable: true,
  'prefix-icon': 'el-icon-search',
  suffixIcon: 'el-icon-date',
  onChange: e => console.log(e),
}
```

:::

## 事件

| 事件名   | 说明                   | 参数                                                       |
| -------- | ---------------------- | ---------------------------------------------------------- |
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |

## 方法

| 方法名        | 说明                                                                                                                                                                 | 参数                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))                              |
| validateField | 对部分表单字段进行校验的方法                                                                                                                                         | Function(props: array \| string, callback: Function(errorMessage: string)) |
| resetFields   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                                                                                           | -                                                                          |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果                                                             | Function(props: array \| string)                                           |

::: tip 提示
如果使用 `typescript` 可以从组件中导出 `IFormExpose` 提供更好的类型推导。参考如下在 setup 中使用

```ts
import type { IFormExpose } from 'element-pro-components'

const ruleForm = ref<IFormExpose>({} as IFormExpose)

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

function resetForm() {
  ruleForm.value.resetFields()
}
```

:::

## 插槽

| name         | 说明                                                           |
| :----------- | :------------------------------------------------------------- |
| -            | 在底部菜单前插入的任意内容                                     |
| menu         | 表单底部按钮                                                   |
| [prop]       | 当前这项的 Form Item 的内容，参数为 { item, value, setValue }  |
| [prop]-label | 当前这项的标签文本的内容，参数为 { item }                      |
| [prop]-error | 当前这项的自定义表单校验信息的显示方式，参数为 { error, item } |

::: tip 提示
[prop] 为 columns 中定义的 prop
:::
