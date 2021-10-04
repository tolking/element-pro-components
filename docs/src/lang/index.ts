import en from 'element-plus/lib/locale/lang/en'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import type { TranslatePair } from 'element-plus/lib/locale'

const lang: Record<string, Record<string, string | TranslatePair>> = {
  'en-US': {
    ...en,
    pro: {
      form: {
        submit: 'Submit',
        reset: 'Reset',
      },
      crud: {
        add: 'Add',
        edit: 'Edit',
        del: 'Delete',
        submit: 'Submit',
        reset: 'Reset',
        search: 'Search',
        searchReset: 'Reset',
      },
    },
    docs: {
      code: {
        hide: 'Hide',
        show: 'Expand',
      },
      pwa: {
        message: 'New content is available.',
        refresh: 'Refresh',
        close: 'Close',
      },
    },
  },
  'zh-CN': {
    ...zhCn,
    pro: {
      form: {
        submit: '提交',
        reset: '重置',
      },
      crud: {
        add: '新增',
        edit: '编辑',
        del: '删除',
        submit: '提交',
        reset: '重置',
        search: '搜索',
        searchReset: '重置',
      },
    },
    docs: {
      code: {
        hide: '隐藏代码',
        show: '显示代码',
      },
      pwa: {
        message: '发现新内容可用',
        refresh: '刷新',
        close: '关闭',
      },
    },
  },
}

export default lang
