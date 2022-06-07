import { computed, Ref } from 'vue'
import { useProp } from 'element-plus'
import type { SelectConfig } from '../Select/type'

export function useDataConfig(): Ref<Required<SelectConfig>> {
  const config = useProp<Readonly<SelectConfig>>('config')

  return computed(() =>
    Object.assign(
      {
        value: 'value',
        label: 'label',
        disabled: 'disabled',
        name: 'name',
        children: 'children',
      } as Required<SelectConfig>,
      config.value
    )
  )
}
