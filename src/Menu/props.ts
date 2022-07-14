import { menuProps as elMenuProps } from 'element-plus'
import { objectOmit } from '../utils/index'
import type { PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

const props = objectOmit(elMenuProps, ['defaultActive', 'router'])

export const menuProps = {
  ...props,
  routes: Array as PropType<RouteRecordRaw[]>,
  router: {
    type: Boolean,
    default: true,
  },
}
