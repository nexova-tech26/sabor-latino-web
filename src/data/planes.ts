export type Plan = {
  id: string
  nombre: string
  precio: string
  precioClase: string
  ahorro?: string
  destacado?: boolean
  features: string[]
}

export const planes: Plan[] = [
  {
    id: 'principiantes',
    nombre: 'Plan Principiantes',
    precio: '105.000',
    precioClase: '18.000',
    features: [
      'Ideal para empezar desde cero.',
      '8 días de clases al mes.',
      'Aprendizaje progresivo y guiado.',
    ],
  },
  {
    id: 'abierto',
    nombre: 'Plan Nivel Abierto',
    precio: '130.000',
    precioClase: '18.000',
    features: [
      'Mayor variedad de ritmos y estilos.',
      '12 días de clases al mes.',
      'Desarrollo de técnica.',
      'Mayor fluidez y confianza al bailar.',
    ],
  },
  {
    id: 'full',
    nombre: 'Mensualidad Full',
    precio: '170.000',
    precioClase: '18.000',
    ahorro: 'Ahorras más de $35.000',
    destacado: true,
    features: [
      'Acceso total a todos los niveles.',
      '20 días de clases al mes.',
      'Mayor práctica, técnica y fluidez.',
      'Avanza más rápido en tu proceso.',
    ],
  },
]
