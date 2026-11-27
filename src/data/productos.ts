export type Producto = {
  id: number
  nombre: string
  categoria: 'ropa' | 'calzado' | 'accesorios'
  precio: number
  tag?: string
  imagen: string
}

export const categorias = [
  { id: 'todos', nombre: 'Todos' },
  { id: 'ropa', nombre: 'Ropa' },
  { id: 'calzado', nombre: 'Calzado' },
  { id: 'accesorios', nombre: 'Accesorios' },
] as const

export const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Camiseta Oficial Entrenamiento',
    categoria: 'ropa',
    precio: 45000,
    tag: 'Nuevo',
    imagen: '/images/tienda/camiseta.jpg',
  },
  {
    id: 2,
    nombre: 'Zapatos de Salsa Profesional',
    categoria: 'calzado',
    precio: 185000,
    tag: 'Top Ventas',
    imagen: '/images/tienda/zapatos.jpg',
  },
  {
    id: 3,
    nombre: 'Chaqueta Elenco Élite',
    categoria: 'ropa',
    precio: 120000,
    tag: 'Exclusivo',
    imagen: '/images/tienda/chaqueta.jpg',
  },
  {
    id: 4,
    nombre: 'Tula Deportiva Sabor Latino',
    categoria: 'accesorios',
    precio: 35000,
    imagen: '/images/tienda/tula.jpg',
  },
  {
    id: 5,
    nombre: 'Protectores de Tacón',
    categoria: 'accesorios',
    precio: 15000,
    tag: 'Esencial',
    imagen: '/images/tienda/protectores.jpg',
  },
  {
    id: 6,
    nombre: 'Sneakers de Baile Urbano',
    categoria: 'calzado',
    precio: 140000,
    imagen: '/images/tienda/sneakers.jpg',
  },
]
