import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'serve' ? '/' : '/ReadPictureTellStory/',
    server: {
      host: '127.0.0.1',
      port: 3000,
      strictPort: true,
    }
  }
})
