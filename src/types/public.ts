import type { App, DefineComponent } from 'vue'
import type { CrudMenu, FormMenu, IPagination } from './index'

export type StringObject = Record<string, unknown>

export type UnknownObject = Record<string | number, unknown>

export type UnknownFunction = (...arg: unknown[]) => unknown

export type DeepTypeof<T> = {
  [Q in keyof T]: T[Q] extends UnknownObject[]
    ? DeepTypeof<T[Q][number]> | Q
    : Q
}[keyof T]

export type IDefineComponent<Props = UnknownObject> = DefineComponent<Props> & {
  install: (app: App, options?: InstallOptions) => void
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

export interface IRowProps {
  /** grid spacing */
  gutter?: number
  /** layout mode, you can use flex, works in modern browsers */
  type?: string
  /** horizontal alignment of flex layout */
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
  /** vertical alignment of flex layout */
  align?: 'top' | 'middle' | 'bottom'
}

export interface IColProps extends IColSizeObject {
  /** `<768px` Responsive columns or column props object */
  xs?: number | IColSizeObject
  /** `≥768px` Responsive columns or column props object */
  sm?: number | IColSizeObject
  /** `≥992px` Responsive columns or column props object */
  md?: number | IColSizeObject
  /** `≥1200px` Responsive columns or column props object */
  lg?: number | IColSizeObject
  /** `≥1920px` Responsive columns or column props object */
  xl?: number | IColSizeObject
}

export interface IColSizeObject {
  /** number of column the grid spans */
  span?: number
  /** number of spacing on the left side of the grid */
  offset?: number
  /** number of columns that grid moves to the right */
  pull?: number
  /** number of columns that grid moves to the left */
  push?: number
}
