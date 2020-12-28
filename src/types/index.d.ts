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

interface ProColumnItem {
  slot?: boolean
  children?: ProColumns
  [key: string]: unknown
}

export type ProColumns = ProColumnItem[]

export interface ProColumnsDefaultBind {
  size?: 'medium' | 'small' | 'mini'
  showOverflowTooltip: boolean
  align?: 'left' | 'center' | 'right'
  headerAlign?: 'left' | 'center' | 'right'
}
