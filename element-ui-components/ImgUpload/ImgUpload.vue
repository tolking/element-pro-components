<template>
  <section>
    <div class="uploader">
      <el-upload
        :show-file-list="false"
        :auto-upload="false"
        :multiple="false"
        :on-change="handleChange"
        :before-upload="() => false"
        action=""
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      </el-upload>
      <div v-if="value" class="img-warp">
        <img :src="value" class="img">
      </div>
      <div v-else class="text">未选择任何文件</div>
    </div>
    <div v-if="tip" class="uploadPhotoTips">{{ tip }}</div>
    <!-- 裁剪图片弹窗 -->
    <el-dialog
      :visible.sync="dialogFixImg"
      :append-to-body="true"
      :close-on-click-modal="false"
      width="600px"
      title="裁剪图片"
      class="dialogs"
      @close="close"
    >
      <div v-if="tip" class="uploadPhotoTips dialog-tip">{{ tip }}</div>
      <div class="crop-box">
        <img :id="imgId">
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button :loading="btnLoading" type="primary" @click="native">直接上传</el-button>
        <el-button :loading="btnLoading" type="primary" @click="crop">裁剪上传</el-button>
        <el-button @click="dialogFixImg = false">取消</el-button>
      </div>
    </el-dialog>
  </section>
</template>

<script>
import axios from 'axios'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.min.css'

export default {
  name: 'ImgUpload',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    tip: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: ''
    },
    scaling: {
      type: Number,
      default: NaN
    },
    width: {
      type: Number,
      default: NaN
    },
    height: {
      type: Number,
      default: NaN
    }
  },
  data() {
    return {
      dialogFixImg: false,
      btnLoading: false,
      cropper: null,
      file: null,
      imgName: null,
      imgType: null,
      insideSrc: null
    }
  },
  computed: {
    imgId() {
      return `cropper${this._uid}`
    },
    previewId() {
      return `cropper_preview${this._uid}`
    }
  },
  methods: {
    // 拦截文件变动
    handleChange(file) {
      this.file = file
      this.imgName = file.raw.name
      this.imgType = file.raw.type
      this.setCrop()
    },
    // 初始化裁剪
    setCrop() {
      const reader = new FileReader()
      reader.readAsDataURL(this.file.raw)
      reader.onload = (event) => {
        this.cropper.replace(event.srcElement.result)
      }
      this.$nextTick(() => {
        const dom = document.getElementById(this.imgId)
        this.cropper = new Cropper(dom, {
          preview: `#${this.previewId}`,
          aspectRatio: this.scaling,
          autoCropArea: 0.8,
          checkCrossOrigin: true
        })
      })
      this.dialogFixImg = true
    },
    // 直接上传图片
    native() {
      this.upFile(this.file.raw)
    },
    // 裁剪图片
    crop() {
      this.btnLoading = true
      this.cropper.getCroppedCanvas({
        width: this.width,
        height: this.height
      }).toBlob(blob => {
        this.upFile(blob)
      }, this.imgType || 'image/jpeg')
    },
    // 上传文件
    async upFile(file) {
      // NOTE: 上传代码需要根据情况合理修改
      const formData = new FormData()
      formData.append('file', file, this.imgName)
      const res = await axios({
        method: 'post',
        url: '', // NOTE: 文件上传 API 地址
        data: formData,
        headers: {
          'ContentType': 'multipart/form-data'
        }
      }).catch(err => {
        console.log('模拟返回，修改 url 后可以将 catch 删除')
        return { data: {
          code: 2000,
          data: 'https://ououe.com/img/homescreen96.png',
          message: '上传成功'
        }}
      })
      const { code, data, message } = res.data
      this.btnLoading = false
      message && this.$message({
        message: message,
        type: code === 2000 ? 'success' : 'error'
      })
      if (code === 2000) {
        this.file = null
        this.imgName = null
        this.imgType = null
        this.close()
        this.$emit('change', data)
      }
    },
    close() {
      this.dialogFixImg = false
      this.cropper.destroy()
    }
  }
}
</script>

<style scoped>
.uploader {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.uploader .text {
  font-size: 12px;
  margin-left: 10px;
  }
.uploader .img-warp {
  margin-left: 10px;
  max-width: 50px;
  max-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.uploader .img-warp .img{
  max-width: 50px;
  max-height: 50px;
}
.uploadPhotoTips {
  line-height: 14px;
  color: red;
  font-size: 12px;
}
.dialog-tip {
  margin-bottom: 10px;
}
.crop-box {
  max-height: 50vh;
  overflow: hidden;
}
</style>
