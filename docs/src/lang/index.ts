import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import type { Language, TranslatePair } from 'element-plus/es/locale'

const lang: Record<string, Language & Record<string, string | TranslatePair>> =
  {
    'en-US': {
      ...en,
      pro: {
        form: {
          submit: 'Submit',
          reset: 'Reset',
          prev: 'Prev',
          next: 'Next',
        },
        search: {
          submit: 'Search',
          reset: 'Reset',
          prev: 'Prev',
          next: 'Next',
        },
        crud: {
          add: 'Add',
          edit: 'Edit',
          detail: 'Detail',
          del: 'Delete',
          submit: 'Submit',
          reset: 'Reset',
          prev: 'Prev',
          next: 'Next',
          search: 'Search',
          searchReset: 'Reset',
          searchPrev: 'Prev',
          searchNext: 'Next',
        },
        tabs: {
          refresh: 'Refresh',
          left: 'Close Left',
          right: 'Close Right',
          others: 'Close Others',
        },
      },
      docs: {
        code: {
          hide: 'Hide',
          show: 'Expand',
          edit: 'Edit on StackBlitz',
          view: 'View on Github',
          copy: 'Copy code',
          copied: 'Copied',
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
          prev: '上一步',
          next: '下一步',
        },
        search: {
          submit: '搜索',
          reset: '重置',
          prev: '上一步',
          next: '下一步',
        },
        crud: {
          add: '新增',
          edit: '编辑',
          detail: '查看',
          del: '删除',
          submit: '提交',
          reset: '重置',
          prev: '上一步',
          next: '下一步',
          search: '搜索',
          searchReset: '重置',
          searchPrev: '上一步',
          searchNext: '下一步',
        },
        tabs: {
          refresh: '刷新',
          left: '关闭左侧',
          right: '关闭右侧',
          others: '关闭其他',
        },
      },
      docs: {
        code: {
          hide: '隐藏代码',
          show: '显示代码',
          edit: '在 StackBlitz 中编辑',
          view: '在 Github 中查看',
          copy: '复制代码',
          copied: '已经复制',
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
