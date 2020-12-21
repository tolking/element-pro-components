import type { RouteMeta, _RouteRecordBase } from 'vue-router'

export type ProRouteRecordRaw = _RouteRecordBase & {
  meta: ProRouteMeta
  children?: ProRouteRecordRaw[]
}
interface ProRouteMeta extends RouteMeta {
  title?: string
  icon?: string
  hidden?: boolean
  keepAlive?: boolean
}
