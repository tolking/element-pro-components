import type { RouteMeta, RouteRecordRaw } from 'vue-router'

export type ProRouteRecordRaw = RouteRecordRaw & {
  meta: ProRouteMeta
}
interface ProRouteMeta extends RouteMeta {
  title?: string
  icon?: string
  hidden?: boolean
  keepAlive?: boolean
}
