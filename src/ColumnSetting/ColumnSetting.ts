import { defineComponent, computed, h, toRefs } from 'vue'
import { ElDropdown, ElDropdownMenu, ElButton, ElTree } from 'element-plus'
import { filterFlat } from '../utils/index'
import props from './props'
import type { ICrudColumns, CrudColumn } from '../Crud/index'
import type { ITableColumns, TableColumn } from '../Table/index'

type Columns = ICrudColumns | ITableColumns
type Column = CrudColumn | TableColumn

export default defineComponent({
  name: 'ProColumnSetting',
  props,
  emits: ['updata:modelValue'],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props)
    const checkedKeys = computed(() => {
      return filterFlat<Columns, string[]>(
        props.modelValue,
        'hide',
        false,
        (item) => item.prop as string
      )
    })

    function handleDropStart({ data }: { data: Column }) {
      data.hide = !data.hide
      emit('updata:modelValue', modelValue)
    }

    function handleDropEnd({ data }: { data: Column }) {
      data.hide = !data.hide
      emit('updata:modelValue', modelValue)
    }

    function handleCheckChange(data: Column) {
      data.hide = !data.hide
      emit('updata:modelValue', modelValue)
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
          default: () =>
            h(ElButton, {
              size: props.size,
              circle: true,
              icon: 'el-icon-setting',
            }),
          dropdown: () =>
            h(ElDropdownMenu, null, () =>
              h(ElTree, {
                data: modelValue.value,
                defaultCheckedKeys: checkedKeys.value,
                emptyText: props.emptyText,
                renderAfterExpand: props.renderAfterExpand,
                expandOnClickNode: props.expandOnClickNode,
                defaultExpandAll: props.defaultExpandAll,
                checkOnClickNode: props.checkOnClickNode,
                autoExpandParent: props.autoExpandParent,
                allowDrag: props.allowDrag,
                allowDrop: props.allowDrop,
                highlightCurrent: props.highlightCurrent,
                filterNodeMethod: props.filterNodeMethod,
                accordion: props.accordion,
                indent: props.indent,
                iconClass: props.iconClass,
                showCheckbox: true,
                checkStrictly: true,
                draggable: true,
                nodeKey: 'prop',
                class: 'pro-column-setting-tree',
                onNodeDragStart: handleDropStart,
                onNodeDragEnd: handleDropEnd,
                onCheck: handleCheckChange,
              })
            ),
        }
      )
  },
})
