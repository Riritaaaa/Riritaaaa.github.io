import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  build:{
    outDir:"./docs",
  },
  // base:"/portfolio",
  // base:"/Portfolio_Rita/",
  /* resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }

  } */
})
