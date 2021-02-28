import type { App, DefineComponent } from 'vue'
import type { CrudMenu, FormMenu, IPagination } from './index'

export type StringObject = Record<string, unknown>

export type UnknownObject = Record<string | number, unknown>

export type UnknownFunction = (...arg: unknown[]) => unknown

export type DeepTypeof<T> = {
  [Q in keyof T]: T[Q] extends UnknownObject ? DeepTypeof<T[Q]> | Q : Q
}[keyof T]

export type IDefineComponent<Props = UnknownObject> = DefineComponent<Props> & {
  install: (app: App) => void
}

export type MenuOptions = CrudMenu & FormMenu & StringObject

export interface InstallOptions extends StringObject {
  /** Pagination Attributes */
  pagination?: IPagination
  /** Menu Attributes */
  menu?: MenuOptions
}

// TODO: will use element-plus types (the current type is not perfect)

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

export interface IDialogProps {
  title?: string
  width?: string | number
  fullscreen: boolean
  top?: string
  modal: boolean
  appendToBody: boolean
  lockScroll: boolean
  customClass?: string
  openDelay?: number
  closeDelay?: number
  closeOnClickModal: boolean
  closeOnPressEscape: boolean
  showClose: boolean
  beforeClose?: (done: () => void) => void
  center: boolean
  destroyOnClose: boolean
}
