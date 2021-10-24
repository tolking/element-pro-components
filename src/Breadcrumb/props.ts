import type { PropType } from 'vue'
import type { IRouteRecordRaw } from '../types/index'

export default {
  routes: {
    type: Array as PropType<IRouteRecordRaw[]>,
  },
  separator: {
    type: String,
  },
  separatorClass: {
    type: String,
  },
}
