import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ITIL-v4-Fundamentos/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
