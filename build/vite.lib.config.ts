import { resolve } from 'path'
import { defineConfig, mergeConfig } from 'vite'
import dts from 'vite-plugin-dts'


import viteBaseConfig from './vite.base.config'

export default mergeConfig(
  viteBaseConfig,
  defineConfig({
    plugins: [
      dts({
        tsconfigPath: resolve(__dirname,  '../packages/vue/tsconfig.json')
      })
    ],
    build: {
      outDir: 'dist/es',
      lib: {
        // 指定入口文件
        entry: resolve(__dirname,  '../packages/vue/src/index.ts'),
        name: 'CarryBrickVue',
        // the proper extensions will be added
        fileName: '@carrybrick/vue',
        formats: ['es']
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue', '@element-plus/icons-vue', '@carrybrick-ui/vue-hooks', '@vueuse/core', '@floating-ui/vue'],
        output: {
          assetFileNames: (chunkInfo) => {
              if(chunkInfo.name === 'style.css') {
                  return 'index.css'
              }
              return chunkInfo.name as string
          }
        },
      },
    }
  })
)

