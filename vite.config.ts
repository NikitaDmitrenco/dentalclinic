import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Determine dynamic base path for GitHub Pages or subpath deployment
const getBasePath = (): string => {
  if (process.env.BASE_PATH) {
    const base = process.env.BASE_PATH
    return base.endsWith('/') ? base : `${base}/`
  }
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
    if (repoName && !repoName.endsWith('.github.io')) {
      return `/${repoName}/`
    }
  }
  return '/'
}

// https://vite.dev/config/
export default defineConfig({
  base: getBasePath(),
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
