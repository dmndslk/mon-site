import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/mon-site/', // Remplacez 'mon-site' par le nom de votre repository GitHub

  plugins: [vue()],
    build: {
    outDir: 'docs' // GitHub Pages utilise 'docs' comme dossier de déploiement
  }
})
