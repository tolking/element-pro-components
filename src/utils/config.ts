export interface InstallOptions {
  pagination?: Record<string, unknown> // pagination Attributes
}

export const config: Required<InstallOptions> = {
  pagination: {
    background: true,
    layout: 'total, sizes, prev, pager, next, jumper',
  },
}
