import type { ExtractPropTypes, Ref, Plugin, SetupContext } from 'vue'
import type { PaginationProps } from 'element-plus'
import type { CrudMenu } from '../Crud/index'
import type { FormMenu } from '../Form/index'

export type StringObject = Record<string, unknown>

export type UnknownObject = Record<string | number, unknown>

export type UnknownFunction = (...arg: unknown[]) => unknown

// eslint-disable-next-line @typescript-eslint/ban-types
type DeepNested<T> = T extends object[]
  ? DeepKeyof<Exclude<T[number], undefined>>
  : T extends unknown[]
  ? never
  : // eslint-disable-next-line @typescript-eslint/ban-types
  T extends object
  ? DeepKeyof<Exclude<T, undefined>>
  : never

type WithNumber<T, Q extends keyof T> = `${Q & string}${Exclude<
  T[Q],
  undefined
> extends unknown[]
  ? `[${number}]`
  : ''}${`.${DeepNested<Exclude<T[Q], undefined>> & string}` | ''}`

/**
 * Get the deep key of the object
 *
 * for example:
 *
 * ```
 *  DeepKeyof<{
 *    name: string
 *    address: string
 *  }> // -> 'name' | 'address'
 *
 *  DeepKeyof<{
 *    date: string
 *    user: {
 *      name: string
 *      address: string
 *    }[]
 *  }> // -> "date" | "user" | "name" | "address" | `user[${number}]` | `user[${number}].name` | `user[${number}].address`
 * ```
 */
export type DeepKeyof<T> = {
  [Q in keyof T]-?: Q | DeepNested<Exclude<T[Q], undefined>> | WithNumber<T, Q>
}[keyof T]

export type MaybeArray<T> = T | Array<T>

export type MaybeRef<T> = T | Ref<T>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExternalParam = any

export type IsAny<T> = 0 extends T & 1 ? true : false

export type IScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type IDefinePlugin<T> = T & Plugin

export type IDefineProps<T> = Readonly<ExtractPropTypes<T>>

export type IDefineEmits<T> = SetupContext<T>['emit']

export type MenuOptions = CrudMenu & FormMenu

export interface InstallOptions {
  /** Pagination Attributes */
  pagination?: PaginationProps
  /** Menu Attributes */
  menu?: MenuOptions
}

/**
 * type helper to make it easier to define options
 * @param options the components options
 */
export function defineOptions(options: InstallOptions): InstallOptions {
  return options
}
