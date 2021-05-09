import type { IComponentSize } from './index'

export interface IInputTagProps {
  modelValue?: string[]
  trigger?: 'space' | 'enter'
  size?: IComponentSize
  type?: 'success' | 'info' | 'warning' | 'danger'
  hit?: boolean
  color?: string
  effect?: 'light' | 'dark' | 'plain'
}

export type IAutocompleteTagProps = IInputTagProps
