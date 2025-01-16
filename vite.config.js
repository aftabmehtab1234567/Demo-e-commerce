import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // The output directory for the build files
    assetsDir: 'assets',  // Directory for static assets
    sourcemap: true,  // Optional: generate sourcemaps for easier debugging
  },
})
