# Guía de imágenes

Todas las fotos del sitio viven en `public/images/` y se referencian desde
`src/data/` y las páginas. Para reemplazar una imagen basta con sobrescribir el
archivo **manteniendo el mismo nombre**; no hay que tocar código.

> Las imágenes actuales son de banco (Unsplash) y se usaron como marcador de
> posición. Reemplázalas por fotos reales de la academia, elencos, instructores
> y productos.

## Recomendaciones generales

- Formato: **JPG** para fotos, **PNG** solo para logos con transparencia.
- Calidad: 80–85 %. Apunta a **menos de 300 KB** por imagen.
- Optimiza antes de subir (por ejemplo con [Squoosh](https://squoosh.app)).
- Usa fotos horizontales/verticales según la proporción indicada para evitar recortes raros.
- Evita texto o marcas de agua dentro de la foto.

## Archivos y proporciones

| Archivo | Uso | Tamaño sugerido | Proporción |
| --- | --- | --- | --- |
| `images/hero.jpg` | Portada de la página de inicio | 1920 × 1080 | 16:9 |
| `images/nosotros.jpg` | Sección "Nosotros" | 1200 × 900 | 4:3 |
| `images/elencos/pre-infantil.jpg` | Elenco Pre-infantil | 1000 × 1250 | 4:5 |
| `images/elencos/infantil.jpg` | Elenco Infantil | 1000 × 1250 | 4:5 |
| `images/elencos/pre-juvenil.jpg` | Elenco Pre-juvenil | 1000 × 1250 | 4:5 |
| `images/elencos/juvenil.jpg` | Elenco Juvenil | 1000 × 1250 | 4:5 |
| `images/elencos/elite.jpg` | Elenco Élite | 1000 × 1250 | 4:5 |
| `images/equipo/santiago.jpg` | Dirección / equipo | 800 × 1000 | 4:5 |
| `images/equipo/freddy.jpg` | Dirección / equipo | 800 × 1000 | 4:5 |
| `images/equipo/ingrid.jpg` | Dirección / equipo | 800 × 1000 | 4:5 |
| `images/instructores/alonso.jpg` | Instructor | 800 × 1000 | 4:5 |
| `images/instructores/andres-ramirez.jpg` | Instructor | 800 × 1000 | 4:5 |
| `images/instructores/isabela.jpg` | Instructora | 800 × 1000 | 4:5 |
| `images/instructores/andres-duran.jpg` | Instructor | 800 × 1000 | 4:5 |
| `images/instructores/jonathan.jpg` | Instructor | 800 × 1000 | 4:5 |
| `images/instructores/david.jpg` | Instructor | 800 × 1000 | 4:5 |
| `images/instructores/maria-camila.jpg` | Instructora | 800 × 1000 | 4:5 |
| `images/servicios/personalizadas.jpg` | Clases personalizadas | 1200 × 900 | 4:3 |
| `images/servicios/coreografias.jpg` | Coreografías | 1200 × 900 | 4:3 |
| `images/servicios/shows.jpg` | Shows y eventos | 1200 × 900 | 4:3 |
| `images/social/latinos.jpg` | Baile social latino | 1200 × 1200 | 1:1 |
| `images/social/urbanos.jpg` | Baile social urbano | 1200 × 1200 | 1:1 |
| `images/tienda/camiseta.jpg` | Producto: camiseta | 1000 × 1000 | 1:1 |
| `images/tienda/zapatos.jpg` | Producto: zapatos | 1000 × 1000 | 1:1 |
| `images/tienda/chaqueta.jpg` | Producto: chaqueta | 1000 × 1000 | 1:1 |
| `images/tienda/tula.jpg` | Producto: tula | 1000 × 1000 | 1:1 |
| `images/tienda/protectores.jpg` | Producto: protectores | 1000 × 1000 | 1:1 |
| `images/tienda/sneakers.jpg` | Producto: sneakers | 1000 × 1000 | 1:1 |
| `share-image.jpg` | Imagen al compartir en redes | 1200 × 630 | 1.91:1 |
| `logo-hz.png` | Logo horizontal del header | ~600 × 200 | — |
| `logo.png` | Logo cuadrado / pie de página | 512 × 512 | 1:1 |
| `favicon.ico` | Icono de la pestaña | 32 × 32 | 1:1 |

## Cambiar el texto o los precios de una imagen

El contenido asociado a cada foto (nombre, descripción, precio, WhatsApp) está
en:

- Elencos: `src/data/elencos.ts`
- Equipo e instructores: `src/data/equipo.ts`
- Servicios: `src/data/servicios.ts`
- Productos de la tienda: `src/data/productos.ts`

Si agregas o quitas un elenco, instructor, servicio o producto, edita también el
archivo de datos correspondiente para que la foto aparezca en el sitio.
