# Layout

## 作用

默认的界面布局

## 使用

1. 基于 `input` 使用

``` html vue
<template>
  <pro-layout />
</template>

<script>
export default {
  data() {
    return {
      tags: []
    }
  },
  methods: {
    handleTagsChange(tags) {
      console.log(tags)
    }
  }
}
</script>
```

**效果**

<template>
  <div style="height: 500px;border: 1px solid var(--borderColor, #ccc)">
    <pro-layout :routers="routers" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      routers: [
        { path: '/login', hidden: true },
        { path: '/404', hidden: true },
        {
          path: '/',
          redirect: '/index',
          name: 'Index',
          children: [{
            path: 'index',
            name: 'home',
            meta: { title: '首页', icon: 'home' }
          }]
        },
        {
          path: '/setUp',
          redirect: '/setUp/addAgent',
          name: 'SetUp',
          meta: { title: '设置', icon: 'setUp' },
          children: [
            {
              path: 'modifyPassWord',
              name: 'ModifyPassWord',
              meta: { title: '修改密码', icon: 'modifyPassWord' }
            },
            {
              path: 'personalData',
              name: 'PersonalData',
              meta: { title: '个人资料', icon: 'personalData' }
            }
          ]
        }
      ]
    }
  }
}
</script>