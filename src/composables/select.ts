import {
  computed,
  ComputedRef,
  onMounted,
  Ref,
  ref,
  shallowRef,
  toRefs,
} from 'vue'
import { isArray } from '../utils/index'
import type {
  SelectConfig,
  SelectDataItem,
  UnknownObject,
  MaybeArray,
  ITreeSelectProps,
} from '../types/index'
import type TreeStore from 'element-plus/lib/el-tree/src/model/tree-store'

interface ITreeStore extends TreeStore {
  setCurrentKey: (value: string | number) => void
}

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
            value: item[config.value] || item[config.label],
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

export function useTreeSelect(
  props: Readonly<ITreeSelectProps>,
  emit: (event: 'update:modelValue', ...args: unknown[]) => void
): {
  tree: Ref<ITreeStore>
  modelValue?: Ref<MaybeArray<string | number> | undefined>
  clearable?: Ref<boolean | undefined>
  multiple?: Ref<boolean | undefined>
  checkStrictly?: Ref<boolean | undefined>
  value: ComputedRef<MaybeArray<string | number> | undefined>
  label: Ref<MaybeArray<string | number>>
  list: Ref<SelectDataItem[]>
  filter: (value: string, item: SelectDataItem) => boolean
  remove: (value: string) => void
  upData: (e: SelectDataItem) => void
  clear: () => void
} {
  const { modelValue, clearable, multiple, checkStrictly } = toRefs(props)
  const tree = shallowRef<ITreeStore>({} as ITreeStore)
  const label = ref<MaybeArray<string | number>>('')
  const list = shallowRef<SelectDataItem[]>([])
  const value = computed(() => (multiple?.value ? '' : modelValue?.value))

  onMounted(() => {
    if (multiple?.value && isArray(modelValue?.value)) {
      tree.value.setCheckedKeys(modelValue?.value as Array<string | number>)
      list.value = tree.value.getCheckedNodes() as SelectDataItem[]
    } else if (!multiple?.value) {
      tree.value.setCurrentKey(value.value as string | number)
      const item = tree.value.getCurrentNode()
      label.value = item?.label
    }
  })

  function filter(value: string, item: SelectDataItem) {
    if (!value) return true
    return item.label.indexOf(value) !== -1
  }

  function remove(value: string) {
    tree.value.setChecked(value, false, !checkStrictly?.value)
    list.value = tree.value.getCheckedNodes() as SelectDataItem[]
    emit('update:modelValue', tree.value.getCheckedKeys())
  }

  function upData(item: SelectDataItem) {
    if (multiple?.value) {
      list.value = tree.value.getCheckedNodes() as SelectDataItem[]
      emit('update:modelValue', tree.value.getCheckedKeys())
    } else {
      label.value = item.label
      emit('update:modelValue', item.value)
    }
  }

  function clear() {
    if (multiple?.value) {
      list.value = []
      tree.value.setCheckedKeys([])
      emit('update:modelValue', [])
    } else {
      label.value = ''
      emit('update:modelValue', value.value)
    }
  }

  return {
    modelValue,
    clearable,
    multiple,
    checkStrictly,
    tree,
    value,
    label,
    list,
    filter,
    remove,
    upData,
    clear,
  }
}
