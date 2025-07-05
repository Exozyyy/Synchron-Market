import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'https://a33992-dfcb.w.d-f.pw',
                changeOrigin: true,
                secure: false,
            },
        },
    },
})
