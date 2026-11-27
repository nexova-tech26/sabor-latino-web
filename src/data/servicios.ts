export type Servicio = {
  id: string
  titulo: string
  resaltado: string
  descripcion: string
  features: string[]
  imagen: string
  waTexto: string
  waMensaje: string
}

export const servicios: Servicio[] = [
  {
    id: 'personalizadas',
    titulo: 'Clases',
    resaltado: 'Personalizadas',
    descripcion:
      'Lleva tu baile al siguiente nivel con sesiones privadas diseñadas según tus objetivos, ritmo y experiencia. Te ayudamos a perfeccionar técnica, estilo, coordinación y confianza con una atención completamente personalizada.',
    features: [
      'Enfoque individual según tus objetivos.',
      'Horarios flexibles.',
      'Salsa, bachata, ritmos latinos y urbanos.',
      'Ideal para principiantes, parejas y bailarines avanzados.',
    ],
    imagen: '/images/servicios/personalizadas.jpg',
    waTexto: 'Agendar clase privada',
    waMensaje: 'Hola, quisiera información sobre clases personalizadas',
  },
  {
    id: 'coreografias',
    titulo: 'Coreografías y',
    resaltado: 'Shows',
    descripcion:
      'Creamos coreografías personalizadas para bodas, quinceañeras y eventos especiales, adaptadas a tu estilo y nivel.',
    features: [
      'Montajes para bodas y quinceañeras.',
      'Eventos empresariales, colegios y universidades.',
      'Creación de shows para darle un toque especial a tus celebraciones.',
    ],
    imagen: '/images/servicios/coreografias.jpg',
    waTexto: 'Cotizar mi coreografía',
    waMensaje: 'Hola, me gustaría cotizar una coreografía para un evento',
  },
  {
    id: 'profesionales',
    titulo: 'Shows',
    resaltado: 'Profesionales',
    descripcion:
      'Lleva a tu evento la energía y el talento de algunos de los bailarines más destacados de Villavicencio, con shows profesionales llenos de ritmo, técnica y puesta en escena.',
    features: [
      'Shows para eventos sociales y empresariales.',
      'Elencos de salsa, bachata y ritmos latinos.',
      'Bailarines con experiencia en competencias y escenarios.',
      'Presentaciones para bodas, fiestas y celebraciones.',
    ],
    imagen: '/images/servicios/shows.jpg',
    waTexto: 'Cotizar show profesional',
    waMensaje: 'Hola, quisiera información para shows profesionales',
  },
]
