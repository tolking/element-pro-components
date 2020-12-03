<template>
  <pro-layout :routers="routers" />
</template>

<script lang="ts">
import { ref } from 'vue'
import { ProLayout } from '/element-pro/'

export default {
  name: 'App',
  components: {
    ProLayout
  },
  setup() {
    const routers = ref([
      // { path: '/login', hidden: true },
      // { path: '/404', hidden: true },
      {
        path: '/',
        redirect: '/index',
        meta: { title: '首页', icon: 'el-icon-house' },
        children: [{
          path: '/index'
        }]
      },
      {
        path: '/components',
        meta: { title: '组建', icon: 'el-icon-files' },
        children: [
          {
            path: '/components/Layout.html',
            meta: { title: '布局组建' }
          },
          {
            path: '/components/Breadcrumb.html',
            meta: { title: '面包屑' }
          }
        ]
      },
      {
        path: '/setting',
        redirect: '/setting/index',
        meta: { title: '设置', icon: 'el-icon-setting' },
        children: [
           {
            path: '/setting/index',
            meta: { title: '个人资料', icon: 'el-icon-user' }
          },
          {
            path: '/setting/password',
            meta: { title: '修改密码', icon: 'el-icon-edit' }
          }
        ]
      }
    ])

    return {
      routers
    }
  }
}
</script>
