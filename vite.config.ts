import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // lib: {
    //   entry: 'src/components/index.ts',
    //   name: 'PetiteVueUi',
    //   formats: ['es', 'umd', 'iife']
    // },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'ts_usage.html'),
      },
    },
  },
})
