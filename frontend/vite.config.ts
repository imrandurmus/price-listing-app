import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


export default defineConfig({
  server: {
    proxy: {
      '/products': 'http://localhost:8080',
    },
  },
});

