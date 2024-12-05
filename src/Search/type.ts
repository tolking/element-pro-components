import { searchProps, searchEmits } from './props'
import type { ColProps } from 'element-plus'
import type { IFormColumns, IFormMenuColumns, IFormSubmit } from '../Form/type'
import type { ExternalParam, IDefineEmits, IDefineProps } from '../types/index'

export type ISearchConfigProp = Partial<Omit<ColProps, 'tag'>>

export type ISearchProps = IDefineProps<typeof searchProps>
export type ISearchEmits = IDefineEmits<typeof searchEmits>

/**
 * Type helper to make it easier to define columns
 * @param columns the columns of Form
 */
export function defineSearchColumns<T = ExternalParam>(
  columns: IFormColumns<T>,
): IFormColumns<T> {
  return columns
}

/**
 * Type helper to make it easier to define menu columns
 * @param columns the columns of Form menu
 */
export function defineSearchMenuColumns(
  columns: IFormMenuColumns,
): IFormMenuColumns {
  return columns
}

/**
 * Type helper to make it easier to define submit function
 * @param fun submit function
 */
export function defineSearchSubmit(fun: IFormSubmit): IFormSubmit {
  return fun
}
