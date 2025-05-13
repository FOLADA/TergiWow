import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,            // opens the report in browser after build
      filename: 'stats.html' // output file name
    })
  ],
  build: {
    chunkSizeWarningLimit: 500, // Optional: increase if you still want to allow >500 KB
    rollupOptions: {
      output: {
        manualChunks: {
          // This splits common large dependencies into their own chunk
          react: ['react', 'react-dom'],
          // You can add more here if needed, like:
          // lodash: ['lodash'],
          // chartjs: ['chart.js'],
        }
      }
    }
  }
});