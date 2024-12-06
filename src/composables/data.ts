import { computed } from 'vue'
import { useProp } from 'element-plus'
import { get } from '../utils/index'
import type { ComputedRef } from 'vue'
import type { ExternalParam } from '../types/index'
import type { SelectConfig, SelectDataItem } from '../Select/type'

export function useDataConfig(): {
  config: ComputedRef<Required<SelectConfig> & Readonly<SelectConfig>>
  getLabel: (item: SelectDataItem) => ExternalParam
  getValue: (item: SelectDataItem) => ExternalParam
  getDisabled: (item: SelectDataItem) => ExternalParam
  getName: (item: SelectDataItem) => ExternalParam
  getChildren: (item: SelectDataItem) => ExternalParam
} {
  const defaultConfig = {
    value: 'value',
    label: 'label',
    disabled: 'disabled',
    name: 'name',
    children: 'children',
  } as Required<SelectConfig>
  const componentConfig = useProp<Readonly<SelectConfig>>('config')

  const config = computed(() =>
    Object.assign(defaultConfig, componentConfig.value),
  )

  const getLabel = (item: SelectDataItem) => get(item, config.value.label)
  const getValue = (item: SelectDataItem) => get(item, config.value.value)
  const getDisabled = (item: SelectDataItem) => get(item, config.value.disabled)
  const getName = (item: SelectDataItem) => get(item, config.value.name)
  const getChildren = (item: SelectDataItem) => get(item, config.value.children)

  return {
    config,
    getLabel,
    getValue,
    getDisabled,
    getName,
    getChildren,
  }
}
