import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // ... outros plugins do Vite
    react(),
  ]
});
