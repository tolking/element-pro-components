# Form

> 封装表单组件实现通过配置动态生成表单

::: tip 提示
可以自动代理支持通过 `v-model` 绑定值的单一节点组件，例如：

- 支持 `el-input` `el-switch` 等
- 不支持 `el-upload` `el-select` `el-radio-group` `el-checkbox-group` 等

可以使用相关 `pro-select` `pro-radio` `pro-checkbox` 等代替
:::

::: warning 警告
组件内部并不包括相关能够使用的组件，所以在使用相关组件前，你必须通过全局注册它

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
      <el-button type="primary">Submit</el-button>
      <el-button>Cancel</el-button>
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

::: demo 通过 columns 的 `component` 定义该项生成什么组件。要求对应组件可以通过 v-model 绑定值

<template>
  <pro-form
    v-model="form1"
    :columns="columns1"
    label-width="100px"
  >
    <template #menu>
      <el-button type="primary">Submit</el-button>
      <el-button>Cancel</el-button>
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

::: demo 通过 columns 的 slot 配置是否开启自定义插槽功能。虽然在启用插槽后可以通过 `v-model="form.slot"` 这种方式绑定值，但我们更推荐使用 `value` 与 `setValue` 这种方式。这样能够更好的与子表单配合

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
    <template #slot="{ item, value, setValue }">
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
  border-color: #409EFF;
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

- 配置子表单

::: demo 通过 columns 的 children 配置子表单

<template>
  <pro-form
    v-model="form3"
    :columns="columns3"
    label-width="100px"
  >
    <template #menu>
      <el-button type="primary">Submit</el-button>
      <el-button>Cancel</el-button>
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
          },
          {
            label: '地址',
            prop: 'address',
            component: 'el-input',
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

## 配置

### v-model

绑定表单数据，替代 `ElForm` 的 model

### columns

自动生成表单的参数，由下面字段组成的数组

| 参数      | 说明                                       | 类型    | 默认值 |
| :-------- | :----------------------------------------- | :------ | :----- |
| slot      | 是否开启自定义插槽功能                     | boolean | false  |
| component | 当前项对应的组件                           | string  | -      |
| props     | 传递的对应的组件的参数                     | object  | -      |
| children  | 实现子表单                                 | array   | -      |
| max       | 与 children 一起使用，限制子表单的最大数量 | number  | -      |

以及 ElFormItem 的配置

### 其它配置

同 [ElForm](https://element-plus.gitee.io/#/zh-CN/component/form)

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
