import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Use esbuild for faster builds
    target: 'es2020',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom'],
  },
  build: {
    // Use esbuild for faster builds
    minify: 'esbuild',
    // Disable source maps for production
    sourcemap: false,
    // Reduce bundle size
    target: 'es2020',
    cssCodeSplit: true,
    reportCompressedSize: false,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        // Better chunk naming for caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
      },
    },
    // Set chunk size warning limit
    chunkSizeWarningLimit: 500,
  },
  server: {
    // Enable compression and caching
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
    // Improve HMR performance
    hmr: {
      overlay: false,
    },
  }
});