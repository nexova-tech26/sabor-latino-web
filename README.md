# Sabor Latino Villavicencio — Sitio web

Sitio oficial de la academia de baile Sabor Latino (Villavicencio, Meta).

## Stack

- [Astro](https://astro.build) — generación estática, HTML sin runtime de framework.
- [Tailwind CSS v4](https://tailwindcss.com) — sistema de diseño y utilidades.
- [lucide-astro](https://github.com/lucide-icons/lucide) — iconografía.
- Contenido centralizado en `src/data/` (elencos, planes, productos, instructores).

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # previsualiza el build
```

## Estructura

```
src/
  components/    Header, Footer, PageHeader
  data/          Contenido editable (precios, elencos, productos...)
  layouts/       Base.astro (SEO, fuentes, JSON-LD)
  pages/         index, elencos, social, servicios, tienda, 404
  styles/        global.css (tokens de Tailwind y componentes)
public/
  images/        Imágenes locales optimizadas
```

## Editar contenido

- Precios y horarios de elencos: `src/data/elencos.ts`
- Planes de baile social: `src/data/planes.ts`
- Productos de la tienda: `src/data/productos.ts`
- Instructores y equipo: `src/data/equipo.ts`
- Servicios especiales: `src/data/servicios.ts`
- Teléfono, dirección y redes: `src/data/site.ts`

## Despliegue

El proyecto genera HTML estático. En Vercel:

- Framework preset: **Astro**
- Build command: `npm run build`
- Output directory: `dist`

El dominio de referencia está en `astro.config.mjs` (`site`). Actualízalo cuando se conecte el dominio definitivo.
