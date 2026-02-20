import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            // Optimize React for production
            jsxRuntime: 'automatic',
        }),
    ],
    build: {
        // Optimize chunk size
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                // Manual chunk splitting for better caching
                manualChunks: {
                    // Core React vendor chunk
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                    // Animation library chunk
                    'animation': ['framer-motion'],
                    // Icons chunk
                    'icons': ['lucide-react'],
                },
                // Optimize chunk file naming for caching
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: (assetInfo) => {
                    const info = assetInfo.name.split('.')
                    const ext = info[info.length - 1]
                    if (/\.(css)$/i.test(assetInfo.name)) {
                        return 'assets/css/[name]-[hash][extname]'
                    }
                    return 'assets/[name]-[hash][extname]'
                },
            },
        },
        // Minification options - using esbuild (default, faster)
        minify: 'esbuild',
        esbuildOptions: {
            drop: ['console', 'debugger'],
        },
        // CSS optimization - inline critical CSS, defer non-critical
        cssMinify: true,
        cssCodeSplit: false,
        // Source maps for debugging (disable in production for smaller builds)
        sourcemap: false,
        // Assets inline limit - inline small assets
        assetsInlineLimit: 4096,
    },
    // Optimize dependencies pre-bundling
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
        exclude: [],
    },
})
