import type { RouteRecordRaw } from 'vue-router'

export type ProRouteRecordRaw = RouteRecordRaw & {
  meta: {
    title?: string
    icon?: string
    hidden?: boolean
    keepAlive?: boolean
  }
}
