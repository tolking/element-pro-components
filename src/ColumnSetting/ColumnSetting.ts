import { defineComponent, computed, h, toRefs, mergeProps } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ElDropdown, ElDropdownMenu, ElButton, ElTree } from 'element-plus'
import { Setting } from '@element-plus/icons-vue'
import { filterFlat } from '../utils/index'
import { columnSettingProps, columnSettingEmits } from './props'
import type { ICrudColumns, CrudColumn } from '../Crud/index'
import type { ITableColumns, TableColumn } from '../Table/index'

type Columns = ICrudColumns | ITableColumns
type Column = CrudColumn | TableColumn

export default defineComponent({
  name: 'ProColumnSetting',
  props: columnSettingProps,
  emits: columnSettingEmits,
  setup(props, { emit, slots }) {
    const { modelValue } = toRefs(props)
    const config = reactiveOmit(
      props,
      'modelValue',
      'trigger',
      'placement',
      'size'
    )
    const checkedKeys = computed(() => {
      return filterFlat<Columns, string[]>(
        props.modelValue,
        'hide',
        false,
        (item) => item.prop as string
      )
    })

    function handleDropEnd() {
      emit('update:modelValue', modelValue.value)
    }

    function handleCheckChange(data: Column) {
      data.hide = !data.hide
      emit('update:modelValue', modelValue.value)
    }

    function createButton() {
      return slots.default
        ? slots.default({ size: props.size })
        : h(ElButton, {
            size: props.size,
            circle: true,
            icon: Setting,
          })
    }

    function createMenu() {
      return h(ElDropdownMenu, null, () =>
        h(
          ElTree,
          mergeProps(config, {
            data: modelValue.value,
            defaultCheckedKeys: checkedKeys.value,
            showCheckbox: true,
            checkStrictly: true,
            draggable: true,
            nodeKey: 'prop',
            class: 'pro-column-setting-tree',
            onNodeDragEnd: handleDropEnd,
            onCheck: handleCheckChange,
          })
        )
      )
    }

    return () =>
      h(
        ElDropdown,
        {
          placement: props.placement,
          trigger: props.trigger,
          class: 'pro-column-setting',
        },
        {
          default: () => createButton(),
          dropdown: () => createMenu(),
        }
      )
  },
})
