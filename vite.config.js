import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'nzhswidgets',
      fileName: (format) => `nzhswidgets.${format}.js`,
      formats: ["es", "umd", "iife"]
    },
    rollupOptions: {
      external: ['vue'],
      resolve: {
        dedupe: ['vue']
      },
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
