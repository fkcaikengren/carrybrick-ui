import DefaultTheme from 'vitepress/theme'
import { 
  Plus,
  Minus,
  CirclePlus,
  Search,
  Delete,
  Refresh 
} from '@element-plus/icons-vue'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('Plus', Plus)
    app.component('Minus', Minus)
    app.component('CirclePlus', CirclePlus)
    app.component('Search', Search)
    app.component('Delete', Delete)
    app.component('Refresh', Refresh)
  }
}
