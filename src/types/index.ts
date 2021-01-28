export * from './form'
export * from './table'
import type { App, DefineComponent } from 'vue'
import type { RouteMeta, RouteRecordRaw } from 'vue-router'

export interface ProRouteMeta extends RouteMeta {
  title?: string
  icon?: string
  hidden?: boolean
  keepAlive?: boolean
}

export type ProRouteRecordRaw = RouteRecordRaw

interface ProColumn {
  slot?: boolean
  children?: ProColumns
  [key: string]: unknown
}

export type ProColumns = ProColumn[]

export type ComponentSize = 'medium' | 'small' | 'mini' | undefined

export type UnknownObject = Record<string, unknown>

export type ProDefineComponent<
  Props = UnknownObject
> = DefineComponent<Props> & {
  install: (app: App) => void
}
