import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this from /love-letter/, but dev should stay at /
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/love-letter/' : '/',
  plugins: [react()],
}))
