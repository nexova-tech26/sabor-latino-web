export default defineNuxtConfig({
  devtools: { enabled: true },

  // Configuración de la App y SEO Global
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      title: 'Sabor Latino Villavicencio | Academia de Baile',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Academia de baile líder en Villavicencio. Clases de salsa, bachata, ritmos latinos, elencos competitivos y baile social.' },
        
        // Metadatos para Redes Sociales (Facebook, WhatsApp, Instagram)
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Sabor Latino Villavicencio - El Arte del Movimiento' },
        { property: 'og:description', content: 'Formación profesional y baile social. ¡Únete a nuestra familia y brilla en el escenario!' },
        { property: 'og:image', content: 'https://sabor-latino-web.vercel.app/share-image.jpg' }, // Imagen que se verá al compartir
        { property: 'og:url', content: 'https://sabor-latino-web.vercel.app' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Sabor Latino Villavicencio' },
        { name: 'twitter:description', content: 'Academia de baile líder en el Meta.' },
      ],
      link: [
        // Favicon (El icono pequeño de la pestaña del navegador)
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Fuentes
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,600;0,800;1,600&display=swap' }
      ]
    }
  },

  // Mantener tu configuración anterior de Vite para el acceso por IP
  vite: {
    server: {
      host: '0.0.0.0',
      port: 3000
    }
  },

  css: ['~/assets/css/main.css']
})