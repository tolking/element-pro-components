import {
  computed,
  ComputedRef,
  onMounted,
  Ref,
  ref,
  shallowRef,
  watch,
} from 'vue'
import { useDataConfig } from '../composables/index'
import { isArray } from '../utils/index'
import type { ITreeSelectProps, ITreeSelectEmits } from '../TreeSelect/index'
import type TreeStore from 'element-plus/es/components/tree/src/model/tree-store'
import type { FilterNodeMethodFunction } from 'element-plus/es/components/tree/src/tree.type'
import type { MaybeArray, UnknownObject } from '../types/index'
import type { SelectDataItem } from '../Select/index'

interface ITreeStore extends TreeStore {
  setCurrentKey: (value: string | number | null) => void
}

export function useTreeSelect(
  props: ITreeSelectProps,
  emit: ITreeSelectEmits
): {
  tree: Ref<ITreeStore>
  expandedKeys?: ComputedRef<(string | number)[] | undefined>
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
  const { getLabel, getValue, getChildren } = useDataConfig()
  const tree = ref<ITreeStore>({} as ITreeStore)
  const label = ref<string | number | undefined>('')
  const list = shallowRef<SelectDataItem[]>([])
  const value = computed(() => (props.multiple ? '' : props.modelValue || ''))
  const expandedKeys = computed(() => {
    return isArray(props.modelValue)
      ? (props.modelValue as Array<string | number>)
      : ([props.modelValue || ''] as Array<string | number>)
  })
  const filter: FilterNodeMethodFunction = (value, item) => {
    if (!value) return true
    return getLabel(item).indexOf(value) !== -1
  }

  onMounted(() => {
    (props.multiple
      ? (props.modelValue as Array<string | number>)?.length
      : props.modelValue) && setDefaultValue()
  })

  watch(() => props.modelValue, setDefaultValue)

  function setDefaultValue() {
    if (props.multiple && isArray(props.modelValue)) {
      tree.value.setCheckedKeys(props.modelValue as Array<string | number>)
      list.value = tree.value.getCheckedNodes() as SelectDataItem[]
    } else if (!props.multiple) {
      tree.value.setCurrentKey((value.value || null) as string | number | null)
      const item = tree.value.getCurrentNode() as SelectDataItem
      label.value = getLabel(item)
    }
  }

  function togglePopper(state: boolean) {
    !state && props.filterable && tree.value.filter('')
    emit('visible-change', state)
  }

  function remove(value: string) {
    tree.value.setChecked(value, false, !props.checkStrictly)
    emit('remove-tag', value)
    upData()
  }

  function upData(item?: SelectDataItem, node?: unknown, self?: unknown) {
    if (props.multiple) {
      const nodes = tree.value.getCheckedNodes() as SelectDataItem[]
      list.value = props.onlySelectLeaf
        ? nodes.filter((item) => !getChildren(item)?.length)
        : nodes
      const keys = list.value.map((item) => getValue(item))
      emit('update:modelValue', keys)
      emit('check-change', item, node, self)
    } else if (item && !item.disabled) {
      if (props.onlySelectLeaf && getChildren(item)?.length) return
      label.value = getLabel(item)
      emit('update:modelValue', getValue(item))
      emit('node-click', item, node, self)
    }
  }

  function clear() {
    props.multiple
      ? emit('update:modelValue', [])
      : emit('update:modelValue', '')
    emit('clear')
  }

  return {
    expandedKeys,
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
