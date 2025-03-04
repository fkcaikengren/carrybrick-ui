import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'; 
import path from 'path';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@carrybrick-ui",
  description: "方便搬砖的组件库",
  markdown: { 
    config(md) { 
      md.use(vitepressDemoPlugin); 
    }, 
  }, 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Vue组件', link: '/vue' }
    ],

    sidebar: [
      {
        text: '基础组件',
        items: [
          { text: 'Button', link: '/vue/button' },
          { text: 'Icon', link: '/vue/icon'}
        ]
      },
      {
        text: '展示组件',
        items: [
          { text: 'Collapse', link: '/vue/collapse' },
          { text: 'Popover', link: '/vue/popover' }
        ]
      },
      {
        text: '表单组件',
        items: [
          { text: 'Input', link: '/vue/input' },
          { text: 'Textarea', link: '/vue/textarea' },
          { text: 'Switch', link: '/vue/switch' }
        ]
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    resolve: {
      alias: {
        '@carrybrick/vue': path.resolve(__dirname, '../../packages/vue/src/index.ts')
      }
    }
  }

  
})
