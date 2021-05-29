import { computed, ComputedRef } from 'vue'
import type {
  SelectConfig,
  SelectDataItem,
  UnknownObject,
} from '../types/index'

type SelectData = Record<string, boolean | string | number | UnknownObject>[]

export function useSelectData(
  props: Readonly<{
    data: SelectData
    config?: SelectConfig
  }>
): ComputedRef<SelectDataItem[] | undefined> {
  const config: Required<SelectConfig> = Object.assign(
    {
      value: 'value',
      label: 'label',
      disabled: 'disabled',
      name: 'name',
      children: 'children',
    },
    props.config
  )

  function transformData(data: SelectData): SelectDataItem[] | undefined {
    return data && data.length
      ? data.map((item) => {
          return {
            value: item[config.value],
            label: item[config.label],
            disabled: item[config.disabled] || false,
            name: item[config.name],
            children: transformData(
              (item[config.children] as unknown) as SelectData
            ),
          } as SelectDataItem
        })
      : undefined
  }

  return computed(() => {
    if (props.config) {
      return transformData(props.data)
    } else {
      return (props.data as unknown) as SelectDataItem[]
    }
  })
}
