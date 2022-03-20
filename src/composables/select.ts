import {
  computed,
  ComputedRef,
  onMounted,
  Ref,
  ref,
  shallowRef,
  toRefs,
  watch,
} from 'vue'
import { isArray } from '../utils/index'
import type { ITreeSelectProps, ITreeSelectEmits } from '../TreeSelect/index'
import type TreeStore from 'element-plus/es/components/tree/src/model/tree-store'
import type { FilterNodeMethodFunction } from 'element-plus/es/components/tree/src/tree.type'
import type { MaybeArray, UnknownObject } from '../types/index'
import type { SelectConfig, SelectDataItem } from '../Select/index'

interface ITreeStore extends TreeStore {
  setCurrentKey: (value: string | number | null) => void
}

export function useSelectConfig(
  props: Readonly<{ config: SelectConfig }>
): Ref<Required<SelectConfig>> {
  return computed(() =>
    Object.assign(
      {
        value: 'value',
        label: 'label',
        disabled: 'disabled',
        name: 'name',
        children: 'children',
      } as Required<SelectConfig>,
      props.config
    )
  )
}

export function useTreeSelect(
  props: ITreeSelectProps,
  emit: ITreeSelectEmits
): {
  tree: Ref<ITreeStore>
  modelValue?: Ref<
    MaybeArray<string | number | boolean | UnknownObject> | undefined
  >
  multiple?: Ref<boolean | undefined>
  checkStrictly?: Ref<boolean | undefined>
  expandedKeys?: ComputedRef<(string | number)[] | undefined>
  filterable?: Ref<boolean | undefined>
  configKeys: Ref<Required<SelectConfig>>
  value: ComputedRef<
    MaybeArray<string | number | boolean | UnknownObject> | undefined
  >
  label: Ref<string | number | undefined>
  list: Ref<SelectDataItem[]>
  filter: FilterNodeMethodFunction
  togglePopper: (state: boolean) => void
  remove: (value: string) => void
  upData: (e: SelectDataItem, node: unknown, self: unknown) => void
  clear: () => void
} {
  const {
    modelValue,
    multiple,
    checkStrictly,
    filterable,
    onlySelectLeaf,
  } = toRefs(props)
  const configKeys = useSelectConfig(props)
  const tree = ref<ITreeStore>({} as ITreeStore)
  const label = ref<string | number | undefined>('')
  const list = shallowRef<SelectDataItem[]>([])
  const value = computed(() => (multiple?.value ? '' : modelValue?.value || ''))
  const expandedKeys = computed(() => {
    return isArray(modelValue?.value)
      ? (modelValue?.value as Array<string | number>)
      : ([modelValue || ''] as Array<string | number>)
  })
  const filter: FilterNodeMethodFunction = (value, item) => {
    if (!value) return true
    return item.label.indexOf(value) !== -1
  }

  onMounted(() => {
    (multiple?.value
      ? (modelValue?.value as Array<string | number>)?.length
      : modelValue?.value) && setDefaultValue()
  })

  watch(() => modelValue?.value, setDefaultValue)

  function setDefaultValue() {
    if (multiple?.value && isArray(modelValue?.value)) {
      tree.value.setCheckedKeys(modelValue?.value as Array<string | number>)
      list.value = tree.value.getCheckedNodes() as SelectDataItem[]
    } else if (!multiple?.value) {
      tree.value.setCurrentKey((value.value || null) as string | number | null)
      const item = tree.value.getCurrentNode() as SelectDataItem
      label.value = item[configKeys.value.label]
    }
  }

  function togglePopper(state: boolean) {
    !state && filterable?.value && tree.value.filter('')
    emit('visible-change', state)
  }

  function remove(value: string) {
    tree.value.setChecked(value, false, !checkStrictly?.value)
    emit('remove-tag', value)
    upData()
  }

  function upData(item?: SelectDataItem, node?: unknown, self?: unknown) {
    if (multiple?.value) {
      const nodes = tree.value.getCheckedNodes() as SelectDataItem[]
      list.value = onlySelectLeaf?.value
        ? nodes.filter((item) => !item[configKeys.value.children]?.length)
        : nodes
      const keys = list.value.map((item) => item[configKeys.value.value])
      emit('update:modelValue', keys)
      emit('check-change', item, node, self)
    } else if (item && !item.disabled) {
      if (onlySelectLeaf?.value && item[configKeys.value.children]?.length)
        return
      label.value = item[configKeys.value.label]
      emit('update:modelValue', item.value)
      emit('node-click', item, node, self)
    }
  }

  function clear() {
    multiple?.value
      ? emit('update:modelValue', [])
      : emit('update:modelValue', '')
    emit('clear')
  }

  return {
    modelValue,
    multiple,
    checkStrictly,
    expandedKeys,
    filterable,
    configKeys,
    tree,
    value,
    label,
    list,
    filter,
    togglePopper,
    remove,
    upData,
    clear,
  }
}
