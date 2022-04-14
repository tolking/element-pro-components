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

export type ObjectValueType<T> = T[keyof T]

export type FilterObject<T> = T extends object[]
  ? T[number]
  : T extends unknown[]
  ? never
  : T extends object
  ? T
  : never

// NOTE: chang to `type ArrayPath<T, Q = ''> = `${T & strng}[${number}]${Q & strng}`` when the typescript version is v4.7.0
type ArrayPath<
  T extends string,
  Q extends string = ''
> = `${T}[${number}]${Q extends '' ? '' : `.${Q}`}`

type ObjectPath<T extends string, Q extends string> = `${T}.${Q}`

type ExtractTemplatePath<T, U> = T extends
  | `${infer P}[${string}`
  | `${infer P}.${string}`
  ? P extends U
    ? T
    : never
  : never

type ExtractPath<T extends object> =
  | ExtractTemplatePath<DeepKeyof<T>, keyof T>
  | keyof T

type DeepNested<K extends string, V> = V extends object[]
  ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore FIXME: Type instantiation is excessively deep and possibly infinite.
    | ArrayPath<
          K,
          | (ExtractPath<V[number]> extends string
              ? ExtractPath<V[number]>
              : never)
          | ''
        >
      | DeepKeyof<V[number]>
  : V extends unknown[]
  ? ArrayPath<K>
  : V extends object
  ?
      | ObjectPath<K, ExtractPath<V> extends string ? ExtractPath<V> : never>
      | DeepKeyof<V>
  : never

/**
 * Get the deep key path of the object
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
export type DeepKeyof<T extends object> = {
  [Q in keyof T]-?: Q | DeepNested<Q & string, Exclude<T[Q], undefined>>
}[keyof T]
// TODO: 继续优化，当类型复杂是类型推到缺失
export type ColumnProp<T> = IsAny<T> extends true
  ? string
  : DeepKeyof<FilterObject<T>>

export type FormColumnChildren<T> = IsAny<T> extends true
  ? T
  : FilterObject<ObjectValueType<FilterObject<T>>>

export type IScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type IDefinePlugin<T> = T & Plugin

export type IDefineProps<T> = Readonly<ExtractPropTypes<T>>

export type IDefineEmits<T> = SetupContext<T>['emit']
