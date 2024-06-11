import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: '@acfatah/type-check',
      fileName: 'type-check',
    },
  },
  test: {
    exclude: ['test/**'],
  },
})
