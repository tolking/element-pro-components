import { defineComponent, h, mergeProps } from 'vue'
import { reactiveOmit, reactivePick } from '@vueuse/core'
import { ElSelect, ElOption, ElTree, useAttrs } from 'element-plus'
import { useTreeSelect } from '../composables/index'
import { treeProps } from '../ColumnSetting/props'
import props from './props'
import emits from './emits'
import type { SelectDataItem } from '../Select/type'

type TreeKeys = Array<keyof typeof props>

interface TreeScope {
  data: SelectDataItem
  node: {
    disabled: boolean
    label: string
  }
}
const treeKeys = Object.keys(treeProps).concat([
  'currentNodeKey',
  'renderContent',
  'draggable',
  'lazy',
  'load',
]) as TreeKeys

export default defineComponent({
  name: 'ProTreeSelect',
  props,
  emits,
  setup(props, { emit, slots }) {
    const attrs = useAttrs()
    const {
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
    } = useTreeSelect(props, emit)
    const treeProps = reactivePick(props, ...treeKeys, 'data')
    const selectProps = reactiveOmit(
      props,
      'data',
      'config',
      'onlySelectLeaf',
      'checkStrictly',
      ...treeKeys
    )

    function createTree() {
      return h(
        ElOption,
        {
          value: value.value || '',
          label: label.value,
          class: 'pro-tree-select-options',
        },
        () =>
          h(
            ElTree,
            mergeProps(treeProps, attrs.value, {
              ref: tree,
              props: configKeys.value,
              showCheckbox: multiple?.value,
              checkStrictly: checkStrictly?.value,
              defaultExpandedKeys: expandedKeys?.value,
              filterNodeMethod: filter,
              highlightCurrent: true,
              nodeKey: 'value',
              class: 'pro-tree-select-tree',
              onNodeClick: upData,
              onCheckChange: upData,
            }),
            {
              default: ({ node, data }: TreeScope) => {
                if (slots.default) {
                  // NOTE: Remove `data` on next major release
                  return slots.default({
                    node,
                    data,
                    item: data,
                    multiple: multiple?.value,
                  })
                } else {
                  return h(
                    'span',
                    {
                      class:
                        node.disabled && !multiple?.value ? 'is-disabled' : '',
                    },
                    node.label
                  )
                }
              },
            }
          )
      )
    }

    function createList() {
      return list.value.map((item) => {
        return h(ElOption, {
          value: item[configKeys.value.value],
          label: item[configKeys.value.label],
          disabled: item[configKeys.value.disabled],
          class: 'is-hidden',
        })
      })
    }

    return () =>
      h(
        ElSelect,
        mergeProps(selectProps, {
          modelValue: modelValue?.value,
          multiple: multiple?.value,
          filterable: filterable?.value,
          filterMethod: tree.value.filter,
          popperClass: 'pro-tree-select-popper',
          class: 'pro-tree-select',
          onVisibleChange: togglePopper,
          onRemoveTag: remove,
          onClear: clear,
        }),
        () => [createTree(), createList()]
      )
  },
})
