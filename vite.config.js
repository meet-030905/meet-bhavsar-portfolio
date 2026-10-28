import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei', 'framer-motion'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':   ['react', 'react-dom'],
          'vendor-three':   ['three'],
          'vendor-r3f':     ['@react-three/fiber', '@react-three/drei'],
          'vendor-motion':  ['framer-motion'],
          'vendor-lucide':  ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 700,
  },
})
