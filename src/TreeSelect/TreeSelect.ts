import { defineComponent, h, mergeProps } from 'vue'
import { ElSelect, ElOption, ElTree, useAttrs } from 'element-plus'
import { useDataConfig, useSplitReactive } from '../composables/index'
import { useTreeSelect } from './useTreeSelect'
import { treeSelectProps, treeKeys, treeSelectEmits, selectKeys } from './props'
import type { SelectDataItem } from '../Select/type'

interface TreeScope {
  data: SelectDataItem
  node: {
    disabled: boolean
    label: string
  }
}

export default defineComponent({
  name: 'ProTreeSelect',
  props: treeSelectProps,
  emits: treeSelectEmits,
  setup(props, { emit, slots }) {
    const attrs = useAttrs()
    const {
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
    } = useTreeSelect(props, emit)
    const { config, getLabel, getValue, getDisabled } = useDataConfig()
    const [treeProps, selectProps] = useSplitReactive(
      props,
      [...treeKeys, 'data'],
      selectKeys,
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
              props: config.value,
              showCheckbox: props.multiple,
              checkStrictly: props.checkStrictly,
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
                  return slots.default({
                    node,
                    item: data,
                    multiple: props.multiple,
                  })
                } else {
                  return h(
                    'span',
                    {
                      class: node.disabled ? 'is-disabled' : '',
                    },
                    node.label,
                  )
                }
              },
            },
          ),
      )
    }

    function createList() {
      return list.value.map((item) => {
        return h(ElOption, {
          value: getValue(item),
          label: getLabel(item),
          disabled: getDisabled(item),
          class: 'is-hidden',
        })
      })
    }

    return () =>
      h(
        ElSelect,
        mergeProps(selectProps, {
          modelValue: props.modelValue,
          multiple: props.multiple,
          filterable: props.filterable,
          filterMethod: tree.value?.filter,
          popperClass: 'pro-tree-select-popper',
          class: 'pro-tree-select',
          onVisibleChange: togglePopper,
          onRemoveTag: remove,
          onClear: clear,
        }),
        () => [createTree(), createList()],
      )
  },
})
