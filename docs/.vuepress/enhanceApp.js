import { 
  Button as ElButton,
  Upload as ElUpload,
  Dialog as ElDialog,
  Message as ElMessage,
  Pagination as ElPagination
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default ({ Vue }) => {
  Vue.use(ElButton)
  Vue.use(ElUpload)
  Vue.use(ElDialog)
  Vue.use(ElPagination)

  Vue.prototype.$message = ElMessage
}
