import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), viteSingleFile()],
  build: {
    cssCodeSplit: false, // 禁止 CSS 代码分割
    assetsInlineLimit: 1024000, // 小于 1MB 的资源自动转 base64（按需调整）
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
