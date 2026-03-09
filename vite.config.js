import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { writeFileSync, readFileSync, existsSync } from 'fs'

// Plugin to copy index.html → 200.html for SPA fallback (Vercel/Surge/Render)
const spaFallback = () => ({
    name: 'spa-fallback',
    closeBundle() {
        const distDir = resolve(__dirname, 'dist');
        const indexPath = resolve(distDir, 'index.html');
        const fallbackPath = resolve(distDir, '200.html');
        if (existsSync(indexPath)) {
            writeFileSync(fallbackPath, readFileSync(indexPath, 'utf-8'));
            console.log('✅ Created 200.html SPA fallback');
        }
    }
});

// Plugin to move CSS links to end of body and remove animation preload
const optimizeHtml = () => ({
    name: 'optimize-html',
    transformIndexHtml(html) {
        // Remove animation modulepreload (not needed for initial render)
        html = html.replace(/\s*<link rel="modulepreload"[^>]*animation[^>]*>\n?/, '');

        // Move all CSS links to end of body
        const cssLinks = html.match(/<link[^>]*rel="stylesheet"[^>]*>/g) || [];
        cssLinks.forEach(link => {
            html = html.replace(link, '');
            html = html.replace('</body>', `  ${link}\n</body>`);
        });

        return html;
    }
});

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            // Optimize React for production
            jsxRuntime: 'automatic',
        }),
        optimizeHtml(),
        spaFallback(),
    ],
    appType: 'spa',
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
