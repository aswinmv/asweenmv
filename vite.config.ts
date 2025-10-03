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
    include: ['react', 'react-dom', 'lucide-react'],
  },
  build: {
    // Enable minification for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    // Generate source maps for debugging
    sourcemap: false,
    // Reduce bundle size
    target: 'es2015',
    cssCodeSplit: true,
    cssMinify: true,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        // Better chunk splitting for caching
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            return 'vendor';
          }
          if (id.includes('/components/')) {
            return 'components';
          }
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
    reportCompressedSize: false,
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