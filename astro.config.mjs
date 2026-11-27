import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// Dominio público del sitio. Se puede sobrescribir sin tocar código
// definiendo la variable de entorno SITE_URL (por ejemplo en Vercel).
const site = process.env.SITE_URL ?? 'https://sabor-latino-web.vercel.app'

export default defineConfig({
  site,
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
