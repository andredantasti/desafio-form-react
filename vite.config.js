import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/desafio-form-react/', // <- nome do repositório
  plugins: [react()],
})