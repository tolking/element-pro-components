<template>
  <pro-form
    v-model="form"
    :columns="columns"
    label-width="100px"
    @submit="submit"
  >
    <template #form-slot-label>
      <picture-rounded class="icon-picture" />
      <span>picture</span>
    </template>
    <template #form-slot="{ value, setValue }">
      <el-upload
        :show-file-list="false"
        :before-upload="(file) => beforeUpload(file, setValue)"
        action=""
        class="avatar-uploader"
      >
        <img v-if="value" :src="value" class="avatar" />
        <plus v-else class="icon-uploader" />
      </el-upload>
    </template>
  </pro-form>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus, PictureRounded } from '@element-plus/icons-vue'
import { defineFormColumns, defineFormSubmit } from 'element-pro-components'

export default defineComponent({
  components: { Plus, PictureRounded },
  setup() {
    const form = ref({})
    const columns = defineFormColumns([
      {
        prop: 'slot',
      },
    ])
    const submit = defineFormSubmit((done, isValid, invalidFields) => {
      ElMessage(`submit: ${isValid}`)
      console.log(form.value, isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    })

    function beforeUpload(file, setValue) {
      // Simulate uploading pictures
      const fileReader = new FileReader()
      fileReader.onloadend = (e) => setValue(e.target.result)
      fileReader.readAsDataURL(file)
      return false
    }

    return {
      form,
      columns,
      submit,
      beforeUpload,
    }
  },
})
</script>

<style>
.icon-picture {
  margin-right: 6px;
  width: 16px;
  height: 16px;
}
.avatar-uploader .el-upload {
  width: 178px;
  height: 178px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  overflow: hidden;
  text-align: center;
  line-height: 200px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader .icon-uploader {
  width: 50px;
  height: 50px;
  color: #8c939d;
}
.avatar-uploader .avatar {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
