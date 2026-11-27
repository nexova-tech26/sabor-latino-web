export type Persona = {
  nombre: string
  rol: string
  imagen: string
  destacado?: boolean
}

export const equipo: Persona[] = [
  {
    nombre: 'Santiago Aguilera Artunduaga',
    rol: 'Director general y coreógrafo principal',
    imagen: '/images/equipo/santiago.jpg',
    destacado: true,
  },
  {
    nombre: 'Freddy Aguilera',
    rol: 'Administración y atención al cliente',
    imagen: '/images/equipo/freddy.jpg',
  },
  {
    nombre: 'Ingrid Artunduaga',
    rol: 'Diseño y producción de vestuario',
    imagen: '/images/equipo/ingrid.jpg',
  },
]

export const instructores: Persona[] = [
  {
    nombre: 'Alonso Galindo',
    rol: 'Instructor de formación artística',
    imagen: '/images/instructores/alonso.jpg',
  },
  {
    nombre: 'Andrés Felipe Ramírez',
    rol: 'Instructor de ritmos latinos',
    imagen: '/images/instructores/andres-ramirez.jpg',
  },
  {
    nombre: 'Isabela Martínez',
    rol: 'Instructora de ritmos latinos',
    imagen: '/images/instructores/isabela.jpg',
  },
  {
    nombre: 'Andrés Felipe Durán',
    rol: 'Instructor de ritmos latinos',
    imagen: '/images/instructores/andres-duran.jpg',
  },
  {
    nombre: 'Jonathan Castro',
    rol: 'Instructor de acrobacia',
    imagen: '/images/instructores/jonathan.jpg',
  },
  {
    nombre: 'David Camargo',
    rol: 'Instructor de ritmos urbanos',
    imagen: '/images/instructores/david.jpg',
  },
  {
    nombre: 'María Camila Viveros',
    rol: 'Instructora de ritmos urbanos',
    imagen: '/images/instructores/maria-camila.jpg',
  },
]
