import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import react from '@vitejs/plugin-react'
import path from "path";

const resolve = (dir: string) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron([
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/main.ts',
      },
      {
        entry: 'electron/preload.ts',
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete, 
          // instead of restarting the entire Electron App.
          options.reload()
        },
      }
    ]),
    renderer(),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      '@components': resolve('src/components'),
      '@store': resolve('src/store'),
      '@views': resolve('src/views'),
      '@assets': resolve('src/assets'),
      '@hooks': resolve('src/hooks'),
    },
  }
})
