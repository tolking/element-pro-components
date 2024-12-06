import type { Component, GlobalComponents } from 'vue'
import type { UnknownObject, UnknownFunction } from './index'

type ComponentInstance = Component & { new (...args: unknown[]): unknown }

export type ColumnComponent = ComponentInstance | keyof GlobalComponents

export type ColumnPropsSlots = string | UnknownObject | UnknownFunction

type ExtractProps<T extends ComponentInstance> = InstanceType<T>['$props']

/**
 * Extract props types from component
 *
 * Support passing in a component type
 *
 * @example
 * ```ts
 *  import { ElInput } from 'element-plus'
 *  type ElInputProps = ExtractComponentProps<typeof ElInput>
 *  // Output
 *  Partial<{
 *    readonly type: string;
 *    readonly disabled: boolean;
 *    readonly label: string;
 *    ...
 *  }>
 * ```
 *
 * Support passing in a component name defined in the GlobalComponents. Before using, you need to import the component definition file to the global. Refer to [element-plus](https://element-plus.org/en-US/guide/quickstart.html#volar-support) and [element-pro-components](https://tolking.github.io/element-pro-components/en-US/guide/#start-using)
 *
 * @example
 * ```ts
 *  type ElInputProps = ExtractComponentProps<'ElInput'>
 *  // Output
 *  Partial<{
 *    readonly type: string;
 *    readonly disabled: boolean;
 *    readonly label: string;
 *    ...
 *  }>
 * ```
 */
export type ExtractComponentProps<T extends ColumnComponent> =
  T extends ComponentInstance
    ? ExtractProps<T>
    : T extends keyof GlobalComponents
      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ExtractProps<GlobalComponents[T]>
      : UnknownObject

/**
 * Type helper to make it easier to define props of component
 * @param props the props of component
 *
 * *Pass in a generic to obtain the props types*
 *
 * Support passing in a component type
 *
 * @example
 * ```ts
 *  import { ElInput } from 'element-plus'
 *  const ElInputProps = defineComponentProps<typeof ElInput>({
 *    type: 'text',
 *    size: 'large',
 *  })
 * ```
 *
 * Support passing in a component name defined in the GlobalComponents. Before using, you need to import the component definition file to the global. Refer to [element-plus](https://element-plus.org/en-US/guide/quickstart.html#volar-support) and [element-pro-components](https://tolking.github.io/element-pro-components/en-US/guide/#start-using)
 *
 * @example
 * ```ts
 *  const ElInputProps = defineComponentProps<'ElInput'>({
 *    type: 'text',
 *    size: 'large',
 *  })
 * ```
 */
export function defineComponentProps<T extends ColumnComponent>(
  props: ExtractComponentProps<T> & { slots?: ColumnPropsSlots },
): ExtractComponentProps<T> & { slots?: ColumnPropsSlots } {
  return props
}
