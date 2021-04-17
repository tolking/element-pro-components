import { computed, ComputedRef } from 'vue'
import type {
  SelectConfig,
  SelectDataItem,
  UnknownObject,
} from '../types/index'

export function useSelectData(
  props: Readonly<{
    data: Record<string, boolean | string | number | UnknownObject>[]
    config?: SelectConfig
  }>
): ComputedRef<SelectDataItem[]> {
  return computed(() => {
    const config: Required<SelectConfig> = Object.assign(
      {
        value: 'value',
        label: 'label',
        disabled: 'disabled',
        name: 'name',
      },
      props.config
    )

    return props.data.map(
      (item) =>
        ({
          value: item[config.value],
          label: item[config.label],
          disabled: item[config.disabled] || false,
          name: item[config.name],
        } as SelectDataItem)
    )
  })
}
