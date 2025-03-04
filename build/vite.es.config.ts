import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig, mergeConfig } from 'vite'
import dts from 'vite-plugin-dts'


import viteBaseConfig from './vite.base.config'

export default mergeConfig(
  viteBaseConfig,
  defineConfig({
    // plugins: [
    //   dts({
    //     tsconfigPath: resolve(__dirname,  '../packages/vue/tsconfig.json')
    //   })
    // ],
    build: {
      outDir: 'dist/es',
      lib: {
        // 指定入口文件
        entry: resolve(__dirname,  '../packages/vue/src/index.ts'),
        formats: ['es'],

      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue', '@element-plus/icons-vue', '@carrybrick-ui/vue-hooks', '@vueuse/core', '@floating-ui/vue'],
        output: {
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot: resolve(__dirname,  '../packages/vue/src'),

          //配置打包根目录
          // dir: resolve(__dirname,  '../packages/vue')
        },
      },
    }
  })
)

