import type { ProPagination } from '../types/index'

export interface InstallOptions {
  /** Pagination Attributes */
  pagination?: ProPagination
}

export const config: Required<InstallOptions> = {
  pagination: {
    background: true,
    layout: 'total, sizes, prev, pager, next, jumper',
  },
}
