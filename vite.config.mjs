import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    root: resolve(process.cwd(), 'frontend'),
    plugins: [svelte()],
    build: {
        outDir: resolve(process.cwd(), 'public/buyer-app'),
        emptyOutDir: true,
        cssCodeSplit: false,
        lib: {
            entry: resolve(process.cwd(), 'frontend/src/main.js'),
            formats: ['es'],
            fileName: () => 'buyer-app.js'
        },
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'buyer-app.css';
                    }

                    return 'assets/[name][extname]';
                }
            }
        }
    },
    server: {
        port: 5173,
        strictPort: true
    }
});
