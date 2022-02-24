import { menuProps } from 'element-plus'
import { objectOmit } from '../utils/index'
import type { PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

const props = objectOmit(menuProps, ['defaultActive', 'router'])

export default {
  ...props,
  routes: {
    type: Array as PropType<RouteRecordRaw[]>,
  },
}
