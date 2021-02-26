export * from './breadcrumb'
export * from './checkbox'
export * from './crud'
export * from './form'
export * from './inputTag'
export * from './layout'
export * from './menu'
export * from './radio'
export * from './select'
export * from './table'
import type { App, DefineComponent } from 'vue'
import type { RouteMeta, RouteRecordRaw } from 'vue-router'
import type { CrudMenu } from './crud'
import type { FormMenu } from './form'
import type { IPagination } from './table'

export type MenuOptions = CrudMenu & FormMenu & StringObject

export interface InstallOptions extends StringObject {
  /** Pagination Attributes */
  pagination?: IPagination
  /** Menu Attributes */
  menu?: MenuOptions
}

export interface IRouteMeta extends RouteMeta {
  title?: string
  icon?: string
  hidden?: boolean
  keepAlive?: boolean
}

// TODO: Better type inference
export type IRouteRecordRaw = RouteRecordRaw

export type IComponentSize = 'medium' | 'small' | 'mini' | undefined

export type IScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type IPlacementType =
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

type IButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'
  | 'default'

type IButtonNativeType = 'button' | 'submit' | 'reset'

export interface IButtonProps {
  type?: IButtonType
  size?: IComponentSize
  icon?: string
  nativeType?: IButtonNativeType
  loading?: boolean
  disabled?: boolean
  plain?: boolean
  autofocus?: boolean
  round?: boolean
  circle?: boolean
}

export type StringObject = Record<string, unknown>

export type UnknownObject = Record<string | number, unknown>

export type UnknownFunction = (...arg: unknown[]) => unknown

export type IDefineComponent<Props = UnknownObject> = DefineComponent<Props> & {
  install: (app: App) => void
}
