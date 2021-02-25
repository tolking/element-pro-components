export * from './crud'
export * from './form'
export * from './table'
import type { App, DefineComponent } from 'vue'
import type { RouteMeta, RouteRecordRaw } from 'vue-router'
import type { ProCrudMenu } from './crud'
import type { ProFormMenu } from './form'
import type { ProPagination } from './table'

export type MenuOptions = ProCrudMenu & ProFormMenu & StringObject

export interface InstallOptions extends StringObject {
  /** Pagination Attributes */
  pagination?: ProPagination
  /** Menu Attributes */
  menu?: MenuOptions
}

export interface ProRouteMeta extends RouteMeta {
  title?: string
  icon?: string
  hidden?: boolean
  keepAlive?: boolean
}

export type ProRouteRecordRaw = RouteRecordRaw

export type ComponentSize = 'medium' | 'small' | 'mini' | undefined

export type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

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
  size?: ComponentSize
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

export type ProDefineComponent<
  Props = UnknownObject
> = DefineComponent<Props> & {
  install: (app: App) => void
}
