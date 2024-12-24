import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import proEn from 'element-pro-components/lib/locale/en'
import proZhCN from 'element-pro-components/lib/locale/zh-cn'
import type { Language, TranslatePair } from 'element-plus/es/locale'

const lang: Record<string, Language & Record<string, string | TranslatePair>> =
  {
    'en-US': {
      ...en,
      ...proEn,
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
        header: {
          theme: 'Switch theme',
          lang: 'Switch language',
          github: 'View source on Github',
        },
      },
    },
    'zh-CN': {
      ...zhCn,
      ...proZhCN,
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
        header: {
          theme: '切换浅色/深色模式',
          lang: '切换语言',
          github: '去 Github 查看源码',
        },
      },
    },
  }

export default lang
