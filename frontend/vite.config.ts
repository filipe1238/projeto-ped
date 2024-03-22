import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': process.env,
    },
    server: {
        watch: {
            usePolling: true,
        },
        host: true, // Here
        strictPort: true,
        port: 80,
    },
    base: './',
});
