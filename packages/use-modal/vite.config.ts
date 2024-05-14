import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

import pkg from './package.json'

export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: false,
    minify: false,
    lib: {
      entry: ['src/index.ts'],
      name: '@scalar/use-modal',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
    },
  },
  test: {
    coverage: {
      enabled: true,
      reporter: 'text',
    },
  },
})