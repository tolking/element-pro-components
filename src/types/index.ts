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

export type ComponentSize = 'medium' | 'small' | 'mini' | undefined

export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

export type UnknownObject = Record<string | number | symbol, unknown>

export type UnknownFunction = (...arg: unknown[]) => unknown

export type ProDefineComponent<
  Props = UnknownObject
> = DefineComponent<Props> & {
  install: (app: App) => void
}
