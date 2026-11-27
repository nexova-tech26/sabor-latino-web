export type Elenco = {
  id: string
  nombre: string
  nombreCorto: string
  edad: string
  descripcion: string
  horario: string
  mensualidad: string
  inscripcion: string
  imagen: string
  elite?: boolean
}

export const elencos: Elenco[] = [
  {
    id: 'pre-infantil',
    nombre: 'Elenco Pre Infantil',
    nombreCorto: 'Pre Infantil',
    edad: '4 a 6 años',
    descripcion:
      'Iniciación al baile mediante coordinación, ritmo, expresión corporal y gimnasia básica, a través de un proceso lúdico y formativo adaptado a su edad.',
    horario: 'Martes y jueves, 4:00 p. m. a 6:00 p. m. · Sábados, 10:00 a. m. a 12:00 m.',
    mensualidad: '$170.000',
    inscripcion: '$20.000',
    imagen: '/images/elencos/pre-infantil.jpg',
  },
  {
    id: 'infantil',
    nombre: 'Elenco Infantil',
    nombreCorto: 'Infantil',
    edad: '7 a 9 años',
    descripcion:
      'Formación enfocada en técnica básica de baile, ritmo, coordinación, expresión escénica, gimnasia y flexibilidad, desarrollando fundamentos de salsa, bachata, urbano y ritmos latinos.',
    horario: 'Martes y jueves, 4:00 p. m. a 6:00 p. m. · Sábados, 10:00 a. m. a 12:00 m.',
    mensualidad: '$170.000',
    inscripcion: '$20.000',
    imagen: '/images/elencos/infantil.jpg',
  },
  {
    id: 'pre-juvenil',
    nombre: 'Elenco Pre Juvenil',
    nombreCorto: 'Pre Juvenil',
    edad: '10 a 13 años',
    descripcion:
      'Formación enfocada en técnica de baile, fortalecimiento corporal, gimnasia, elasticidad y expresión escénica, preparando a los bailarines para competencias y presentaciones.',
    horario: 'Lunes, miércoles y viernes, 4:00 p. m. a 6:00 p. m.',
    mensualidad: '$170.000',
    inscripcion: '$20.000',
    imagen: '/images/elencos/pre-juvenil.jpg',
  },
  {
    id: 'juvenil',
    nombre: 'Elenco Juvenil',
    nombreCorto: 'Juvenil',
    edad: '14 años en adelante',
    descripcion:
      'Formación enfocada en técnica de baile, fortalecimiento corporal, gimnasia, elasticidad y proyección escénica, desarrollando bases para procesos competitivos.',
    horario: 'Martes y jueves, 7:00 p. m. a 9:00 p. m. · Sábados, 3:00 p. m. a 5:30 p. m.',
    mensualidad: '$170.000',
    inscripcion: '$20.000',
    imagen: '/images/elencos/juvenil.jpg',
  },
  {
    id: 'elite',
    nombre: 'Elenco Élite',
    nombreCorto: 'Élite Profesional',
    edad: 'Ingreso por audición',
    descripcion:
      'Nuestro grupo representativo de alto nivel, enfocado en técnica avanzada, acrobacia, velocidad y proyección escénica para competencias, shows y presentaciones nacionales e internacionales.',
    horario:
      'Lunes, miércoles y viernes, 7:00 p. m. a 9:30 p. m. · Sábados, 3:00 p. m. a 5:30 p. m.',
    mensualidad: '$170.000',
    inscripcion: '$20.000',
    imagen: '/images/elencos/elite.jpg',
    elite: true,
  },
]
