import { descriptionsProps } from './props'
import type { VNode } from 'vue'
import type {
  IDefineProps,
  ExternalParam,
  UnknownObject,
  MaybeArray,
  ColumnProp,
} from '../types/index'

export interface DescriptionsColumn<T = ExternalParam> {
  prop: ColumnProp<T>
  label?: string
  span?: number
  width?: string
  minWidth?: string
  align?: 'left' | 'center' | 'right'
  labelAlign?: 'left' | 'center' | 'right'
  className?: string
  labelClassName?: string
  render?: (detail: T) => string | MaybeArray<VNode>
  renderLabel?: (column: DescriptionsColumn<T>) => string | MaybeArray<VNode>
}

export type IDescriptionsColumns<T = ExternalParam> = Array<
  DescriptionsColumn<T> & UnknownObject
>

export type IDescriptionsProps = IDefineProps<typeof descriptionsProps>

/**
 * Type helper to make it easier to define columns
 * @param columns the columns of Descriptions
 */
export function defineDescriptionsColumns<T = ExternalParam>(
  columns: IDescriptionsColumns<T>,
): IDescriptionsColumns<T> {
  return columns
}
