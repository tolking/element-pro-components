import en from 'element-plus/lib/locale/lang/en'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import type { TranslatePair } from 'element-plus/lib/locale'

const lang: Record<string, Record<string, string | TranslatePair>> = {
  'en-US': {
    ...en,
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
