import { CycleStepData } from '../types/anxiety';

export const cycleStepsData: Record<string, CycleStepData> = {
  trigger: {
    id: 'trigger',
    title: 'Disparador',
    icon: '⚡',
    description: 'Cualquier sensación corporal, información o situación que inicia el ciclo de ansiedad. Puede ser algo muy sutil que normalmente no notarías.',
    examples: [
      'Notar el latido del corazón',
      'Sentir un mareo leve',
      'Leer sobre una enfermedad',
      'Ver un lunar nuevo en la piel',
      'Sentir un dolor de cabeza',
      'Escuchar sobre síntomas en redes sociales'
    ],
    color: 'bg-red-500',
    position: { x: 50, y: 10 },
    tips: [
      'Los disparadores son normales y le pasan a todo el mundo',
      'No es el disparador en sí, sino cómo lo interpretamos',
      'Practicar mindfulness ayuda a observar sin reaccionar'
    ],
    interventions: [
      'Técnicas de respiración consciente',
      'Observación sin juicio de las sensaciones',
      'Recordar que las sensaciones son temporales'
    ]
  },
  thought: {
    id: 'thought',
    title: 'Pensamiento Catastrófico',
    icon: '💭',
    description: 'La mente interpreta la sensación como una señal de peligro grave e inminente. Este es el momento clave donde se amplifica la ansiedad.',
    examples: [
      '"Esto debe ser un infarto"',
      '"Seguro que tengo cáncer"',
      '"Me voy a desmayar aquí mismo"',
      '"Algo terrible está pasando en mi cuerpo"',
      '"Voy a morir y nadie podrá ayudarme"',
      '"Esta vez es diferente, es real"'
    ],
    color: 'bg-blue-500',
    position: { x: 85, y: 35 },
    tips: [
      'Los pensamientos no son hechos',
      'La ansiedad hace que veamos peligro donde no lo hay',
      'Cuestionar: "¿Hay evidencia real de este peligro?"'
    ],
    interventions: [
      'Técnicas de reestructuración cognitiva',
      'Preguntas socráticas para cuestionar pensamientos',
      'Práctica de defusión cognitiva'
    ]
  },
  symptom: {
    id: 'symptom',
    title: 'Síntomas Físicos',
    icon: '💓',
    description: 'El cuerpo reacciona al miedo percibido activando el sistema nervioso simpático. Estos síntomas son reales pero no peligrosos.',
    examples: [
      'Taquicardia y palpitaciones',
      'Sudoración excesiva',
      'Temblores en manos o piernas',
      'Sensación de ahogo o falta de aire',
      'Tensión muscular y rigidez',
      'Mareos o sensación de irrealidad'
    ],
    color: 'bg-orange-500',
    position: { x: 85, y: 75 },
    tips: [
      'Los síntomas de ansiedad no son peligrosos',
      'Son la respuesta natural del cuerpo al miedo',
      'Suelen durar entre 5-20 minutos máximo'
    ],
    interventions: [
      'Técnicas de relajación muscular progresiva',
      'Ejercicios de respiración diafragmática',
      'Aceptación de las sensaciones sin luchar'
    ]
  },
  behavior: {
    id: 'behavior',
    title: 'Conductas de Seguridad',
    icon: '🔍',
    description: 'Acciones que realizas para reducir la ansiedad a corto plazo, pero que mantienen y refuerzan el problema a largo plazo.',
    examples: [
      'Tomarse el pulso repetidamente',
      'Buscar síntomas en Google o WebMD',
      'Ir a urgencias o llamar al médico',
      'Pedir tranquilización a familiares',
      'Evitar actividades que generen sensaciones',
      'Revisar el cuerpo constantemente'
    ],
    color: 'bg-green-500',
    position: { x: 50, y: 90 },
    tips: [
      'Las conductas de seguridad mantienen el miedo',
      'Proporcionan alivio temporal pero empeoran el problema',
      'Reducirlas gradualmente es clave para la recuperación'
    ],
    interventions: [
      'Exposición gradual sin conductas de seguridad',
      'Técnicas de prevención de respuesta',
      'Desarrollo de tolerancia a la incertidumbre'
    ]
  },
  consequence: {
    id: 'consequence',
    title: 'Consecuencias',
    icon: '🔄',
    description: 'Alivio temporal seguido de más dudas y mayor sensibilización. El cerebro "aprende" que había peligro real.',
    examples: [
      'Alivio que dura solo minutos u horas',
      'Nuevas dudas surgen rápidamente',
      'Mayor hipervigilancia corporal',
      'Dependencia de las comprobaciones',
      'Reducción del umbral de alarma',
      'Más ansiedad ante sensaciones similares'
    ],
    color: 'bg-purple-500',
    position: { x: 15, y: 75 },
    tips: [
      'El alivio temporal refuerza el comportamiento',
      'Cada comprobación enseña al cerebro que había peligro',
      'Romper este patrón requiere tolerancia inicial a la ansiedad'
    ],
    interventions: [
      'Psicoeducación sobre el mantenimiento de la ansiedad',
      'Técnicas de tolerancia al malestar',
      'Desarrollo de confianza en las capacidades propias'
    ]
  },
  reinforcement: {
    id: 'reinforcement',
    title: 'Reforzamiento',
    icon: '➕',
    description: 'Cada vuelta al ciclo lo hace más fuerte y automático, creando un patrón neuronal que confirma tus peores miedos.',
    examples: [
      'El cerebro "aprende" a temer sensaciones normales',
      'Se reduce el umbral de activación de alarma',
      'Aumenta la frecuencia e intensidad de episodios',
      'Se generaliza a más situaciones y sensaciones',
      'El patrón se vuelve completamente automático',
      'Cada episodio "confirma" que el peligro era real'
    ],
    color: 'bg-gray-700',
    position: { x: 15, y: 35 },
    tips: [
      'Entender este proceso es el primer paso para cambiarlo',
      'El cerebro puede "desaprender" estos patrones',
      'La recuperación requiere romper el ciclo conscientemente'
    ],
    interventions: [
      'Terapia cognitivo-conductual especializada',
      'Técnicas de exposición interoceptiva',
      'Mindfulness y aceptación de sensaciones'
    ]
  }
};