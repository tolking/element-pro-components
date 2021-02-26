import type { InstallOptions } from '../types/index'

export const config: Required<InstallOptions> = {
  pagination: {
    background: true,
    layout: 'total, sizes, prev, pager, next, jumper',
  },
  menu: {
    add: true,
    addText: 'Add',
    addProps: { type: 'primary' },
    edit: true,
    editText: 'edit',
    editProps: { type: 'text', icon: 'el-icon-edit' },
    del: true,
    delText: 'delete',
    delProps: { type: 'text', icon: 'el-icon-delete' },
    submit: true,
    submitText: 'Submit',
    submitProps: { type: 'primary' },
    reset: true,
    resetText: 'Reset',
    search: true,
    searchText: 'Search',
    searchProps: { type: 'primary' },
    searchReset: true,
    searchResetText: 'Reset',
  },
}
