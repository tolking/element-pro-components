<template>
  <pro-tabs :before-add="beforeAdd" />
</template>

<script>
import { defineComponent, nextTick } from 'vue'
import { ElNotification } from 'element-plus'

export default defineComponent({
  setup() {
    function beforeAdd(e) {
      console.log('Tabs-before-add', e)
      nextTick(() => {
        ElNotification({
          type: 'success',
          title: 'Success',
          message: 'Come from before-add',
        })
      })
    }

    return {
      beforeAdd,
    }
  },
})
</script>
