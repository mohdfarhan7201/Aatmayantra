import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  server: {
    host: true,   // bind to 0.0.0.0 — required for AWS EC2 public access
    port: 5173,
  },
  preview: {
    host: true,   // same for `vite preview` (serving the production build)
    port: 4173,
  },
})

