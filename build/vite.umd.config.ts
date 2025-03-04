import { resolve } from 'path'
import { defineConfig, mergeConfig } from 'vite'

import viteBaseConfig from './vite.base.config'

export default mergeConfig(
  viteBaseConfig,
  defineConfig({
    build: {
      outDir: 'dist',
      lib: {
        // 指定入口文件
        entry: resolve(__dirname,  '../packages/vue/src/index.ts'),
        formats: ['umd', 'iife'],
        name: 'CarryBrickVue',
        // the proper extensions will be added
        fileName: 'carrybrick-vue',
      },
      rollupOptions: {
        // 全量的包，直接在浏览器中引用，除了vue, 其他依赖需要打包到产物中
        external: ['vue'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue',
          },
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

