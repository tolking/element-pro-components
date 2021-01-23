import type { App, DefineComponent } from 'vue'
import type { RouteMeta, RouteRecordRaw } from 'vue-router'

export interface ProRouteMeta extends RouteMeta {
  title?: string
  icon?: string
  hidden?: boolean
  keepAlive?: boolean
}

export type ProRouteRecordRaw = RouteRecordRaw

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

export type ProDefineComponent<
  Props = Record<string, unknown>
> = DefineComponent<Props> & {
  install: (app: App) => void
}
