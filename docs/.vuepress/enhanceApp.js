import { 
  Button as ElButton,
  Upload as ElUpload,
  Dialog as ElDialog,
  Message as ElMessage,
  Pagination as ElPagination
} from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/button.css'
import 'element-ui/lib/theme-chalk/upload.css'
import 'element-ui/lib/theme-chalk/dialog.css'
import 'element-ui/lib/theme-chalk/message.css'
import 'element-ui/lib/theme-chalk/pagination.css'

export default ({ Vue }) => {
  Vue.use(ElButton)
  Vue.use(ElUpload)
  Vue.use(ElDialog)
  Vue.use(ElPagination)

  Vue.prototype.$message = ElMessage
}
