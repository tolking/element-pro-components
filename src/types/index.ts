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

export type ComponentSize = 'medium' | 'small' | 'mini' | undefined

export interface ProColumnsDefaultBind {
  size?: ComponentSize
  showOverflowTooltip: boolean
  align?: 'left' | 'center' | 'right'
  headerAlign?: 'left' | 'center' | 'right'
}

type FieldErrorList = Record<string, unknown>

export interface ProFormValidateCallback {
  (isValid: boolean, invalidFields?: FieldErrorList): void
}

export interface ProFormValidateFieldCallback {
  (message?: string, invalidFields?: Record<string, unknown>): void
}

export interface ProFormExpose {
  validate: (callback?: ProFormValidateCallback) => Promise<boolean>
  resetFields: () => void
  clearValidate: (props?: string | string[]) => void
  validateField: (
    props: string | string[],
    cb: ProFormValidateFieldCallback
  ) => void
}

export type ProDefineComponent<
  Props = Record<string, unknown>
> = DefineComponent<Props> & {
  install: (app: App) => void
}
