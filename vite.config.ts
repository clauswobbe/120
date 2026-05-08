import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

function copyHtaccess() {
  return {
    name: 'copy-htaccess',
    closeBundle() {
      const src = path.resolve(__dirname, 'public/.htaccess')
      const dest = path.resolve(__dirname, 'dist/.htaccess')
      if (fs.existsSync(src)) fs.copyFileSync(src, dest)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), copyHtaccess()],
  base: '/',
  build: { sourcemap: true },
})
