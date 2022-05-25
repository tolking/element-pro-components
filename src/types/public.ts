import type { ExtractPropTypes, Ref, Plugin, SetupContext } from 'vue'

export type StringObject = Record<string, unknown>

export type UnknownObject = Record<string | number, unknown>

export type UnknownFunction = (...arg: unknown[]) => unknown

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExternalParam = any

export type IsAny<T> = 0 extends T & 1 ? true : false

export type Mutable<T> = { -readonly [P in keyof T]: T[P] }

export type MaybeArray<T> = T | Array<T>

export type MaybeRef<T> = T | Ref<T>

/** A | B -> A & B */
export type UnionToIntersection<T> = (
  T extends unknown ? (arg: T) => void : never
) extends (arg: infer U) => void
  ? U
  : never

export type ObjectValueType<T> = T[keyof T]

export type FilterObject<T> = T extends object[]
  ? T[number]
  : T extends unknown[]
  ? never
  : T extends object
  ? T
  : never

type NestedPath<T extends 'array' | 'object', P, C = undefined> = `${P &
  string}${T extends 'array' ? `[${number}]` : ''}${C extends string
  ? `.${C}`
  : ''}`

type ExtractTemplatePath<T, U> = T extends
  | `${infer P}[${string}`
  | `${infer P}.${string}`
  ? P extends U
    ? T
    : never
  : never

type ExtractPath<T extends object> =
  | ExtractTemplatePath<DeepPath<T>, keyof T>
  | keyof T

type DeepNested<K extends string, V> = V extends object[]
  ? NestedPath<'array', K, ExtractPath<V[number]> | undefined>
  : V extends unknown[]
  ? NestedPath<'array', K>
  : V extends object
  ? NestedPath<'object', K, ExtractPath<V>>
  : never

/**
 * Get the deep key path of the object
 *
 * for example:
 *
 * ```
 *  DeepPath<{
 *    name: string
 *    address: string
 *  }> // -> 'name' | 'address'
 *
 *  DeepPath<{
 *    date: string
 *    user: {
 *      name: string
 *      address: string
 *    }[]
 *  }> // -> "date" | "user" | `user[${number}]` | `user[${number}].name` | `user[${number}].address`
 * ```
 */
export type DeepPath<T extends object> = {
  [Q in keyof T]-?: Q | DeepNested<Q & string, NonNullable<T[Q]>>
}[keyof T]

export type ColumnProp<T> = IsAny<T> extends true
  ? string
  : DeepPath<FilterObject<T>>

export type FormColumnChildren<T> = IsAny<T> extends true
  ? T
  : UnionToIntersection<FilterObject<ObjectValueType<FilterObject<T>>>>

export type IScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type IDefinePlugin<T> = T & Plugin

export type IDefineProps<T> = Readonly<ExtractPropTypes<T>>

export type IDefineEmits<T> = SetupContext<T>['emit']
