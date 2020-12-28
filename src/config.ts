export interface InstallOptions {
  pagination?: Record<string, unknown>
}

export const config = {
  pagination: {
    background: true,
    layout: 'total, sizes, prev, pager, next, jumper',
  },
}
