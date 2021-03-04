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
    editText: 'Edit',
    editProps: { type: 'text' },
    del: true,
    delText: 'Delete',
    delProps: { type: 'text' },
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
