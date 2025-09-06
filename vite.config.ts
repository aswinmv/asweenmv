import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Remove console logs in production
    drop: ['console', 'debugger'],
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom'],
  },
  build: {
    // Enable minification for production
    minify: 'esbuild', // Faster than terser
    // Generate source maps for debugging
    sourcemap: false,
    // Reduce bundle size
    target: 'es2015',
    cssCodeSplit: true,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        // Better chunk splitting for caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
        // Optimize asset naming for caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    },
    // Set chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Enable compression
    reportCompressedSize: false, // Faster builds
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false, // Disable error overlay for better performance
    },
    headers: {
      'Cache-Control': 'public, max-age=31536000',
      'X-Content-Type-Options': 'nosniff',
    },
  },
  // Enable CSS optimization
  css: {
    devSourcemap: false,
  },
});