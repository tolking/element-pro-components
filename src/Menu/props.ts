import type { PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

export default {
  routes: {
    type: Array as PropType<RouteRecordRaw[]>,
  },
  mode: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'vertical',
  },
  defaultOpeneds: {
    type: Array as PropType<string[]>,
  },
  uniqueOpened: Boolean,
  menuTrigger: {
    type: String as PropType<'hover' | 'click'>,
    default: 'hover',
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  collapseTransition: {
    type: Boolean,
    default: true,
  },
}
