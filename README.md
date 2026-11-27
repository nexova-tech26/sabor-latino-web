# Sabor Latino Villavicencio — Sitio web

Sitio oficial de la academia de baile Sabor Latino (Villavicencio, Meta).

## Stack

- [Astro](https://astro.build) — generación estática, HTML sin runtime de framework.
- [Tailwind CSS v4](https://tailwindcss.com) — sistema de diseño y utilidades.
- [@lucide/astro](https://github.com/lucide-icons/lucide) — iconografía.
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
docs/
  IMAGENES.md    Guía para reemplazar fotos (nombres, tamaños y proporciones)
```

## Editar contenido

- Precios y horarios de elencos: `src/data/elencos.ts`
- Planes de baile social: `src/data/planes.ts`
- Productos de la tienda: `src/data/productos.ts`
- Instructores y equipo: `src/data/equipo.ts`
- Servicios especiales: `src/data/servicios.ts`
- Teléfono, dirección y redes: `src/data/site.ts`

## Despliegue

El proyecto genera HTML estático. El archivo `vercel.json` ya fija la
configuración correcta, así que Vercel no necesita ajustes manuales de framework:

- Framework preset: **Astro**
- Build command: `npm run build`
- Output directory: `dist`

### Dominio

El dominio se define en un solo lugar: `astro.config.mjs` (`site`). También se
puede sobrescribir con la variable de entorno `SITE_URL` en Vercel
(*Settings → Environment Variables*), sin cambiar código. Ese valor alimenta el
canonical, Open Graph, JSON-LD, el sitemap y `robots.txt`.

### Imágenes

Antes de publicar, reemplaza las fotos de marcador de posición por fotos reales
de la academia. Consulta [`docs/IMAGENES.md`](docs/IMAGENES.md) para ver el
listado de archivos, tamaños y proporciones recomendadas.
