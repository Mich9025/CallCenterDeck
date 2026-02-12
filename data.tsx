import { SlideType } from './types';

export const APP_DATA = {
  company: {
    name: "GOBIG AI",
    logo: "https://www.gobigagency.co/Images/logo.svg",
    colors: {
      primary: '#00ff9d',
      secondary: '#00ccff',
      accent: '#7000ff',
    }
  },
  client: {
    name: "Lina Pérez",
    company: "Llama Colombia",
    role: "Asesora en Ventas",
    email: "linaperez99@outlook.com",
    phone: "+57 311 2384622",
    industry: "Servicios",
    volume: "100-500 llamadas/día",
    painPoint: "Operación manual y baja escalabilidad",
    goal: "Agente de Texto y Voz Automatizado"
  },
  landing: {
    title: "Propuesta de Soluciones IA",
    subtitle: "Preparado exclusivamente para",
    buttonText: "Iniciar Presentación",
    footer: "GOBIG AI © 2025"
  },
  slides: {
    intro: {
      tag: "Propuesta Personalizada",
      greeting: "Hola,",
      welcomePre: "Bienvenida al futuro de",
      description: "En GOBIG AI, hemos diseñado una solución de Agentes de Voz para transformar tu centro de operaciones y escalar tus ventas sin aumentar el estrés operativo.",
      solutionTag: "Solución",
      solutionTitle: "Voz + IA Generativa"
    },
    diagnosis: {
      title: "Diagnóstico:",
      highlight: "El Cuello de Botella",
      description: (company: string, volume: string) => `Para una operación de ventas como ${company}, el volumen de ${volume} presenta un desafío crítico.`,
      cards: [
        {
          title: "Pérdida de Tiempo",
          desc: "Marcación manual y filtros de llamadas no contestadas consumen el 60% del tiempo de un asesor.",
          iconKey: "clock"
        },
        {
          title: "Escalabilidad Limitada",
          desc: "Duplicar ventas hoy implica duplicar personal, nómina y gestión humana.",
          iconKey: "users"
        },
        {
          title: "Oportunidades Perdidas",
          desc: "Los leads se enfrían en minutos. Si no se contactan de inmediato, la conversión cae un 400%.",
          iconKey: "trending"
        }
      ],
      painPointLabel: "Este es el dolor que GOBIG AI elimina desde el día 1."
    },
    solution: {
      title: "La Solución:",
      highlight: "Call Center Autónomo",
      description: "No reemplazamos a los humanos, les damos superpoderes. La IA filtra, califica y agenda; tu equipo cierra.",
      features: [
        {
          title: "Agentes de Voz Hiper-Realistas",
          desc: "Latencia sub-500ms. Interrupciones naturales. Tono empático y vendedor."
        },
        {
          title: "Escalabilidad Instantánea",
          desc: "De 20 a 10,000 llamadas simultáneas sin contratar a una sola persona extra."
        },
        {
          title: "Integración CRM Total",
          desc: "Todo queda registrado. Grabaciones, transcripciones y clasificación automática de leads."
        },
        {
          title: "Análisis de Sentimiento",
          desc: "La IA detecta objeciones, humor del cliente y probabilidad de cierre."
        }
      ]
    },
    tech: {
      title: "Arquitectura Técnica",
      subtitle: "Flujo de datos seguro y de alta velocidad",
      labels: {
        user: "User",
        userSub: "PSTN / Teléfono",
        gateway: "Twilio",
        gatewaySub: "Gateway",
        aiName: "SOFIA 2.0",
        aiSub1: "Vapi.ai",
        aiSub2: "LLM",
        storage: "Azure Blob",
        webhook: "CRM / Webhook",
        legend: ["Voice Stream", "Inference", "Data Sync"]
      }
    },
    demo: {
      title: "Simulación en Vivo",
      subtitle: "Escucha cómo Sofía gestiona una venta típica.",
      audioUrl: "http://cms.gobigagency.co/wp-content/uploads/2026/02/recording-1.wav",
      agentName: "Sofía (AI Agent)",
      statusActive: "• En llamada...",
      statusIdle: "Conectado",
      buttons: {
        mute: "Silenciar",
        keyboard: "Teclado"
      }
    },
    roi: {
      title: "Valores de Referencia",
      highlight: "Modelo Transparente",
      description: "Nuestra estructura de costos está diseñada para crecer contigo. Estos son los promedios que manejamos para proyectos similares.",
      items: [
        {
          category: "Setup & Onboarding",
          value: "A Medida",
          unit: "Dependiendo de la necesidad",
          detail: "Configuración de agentes, integración CRM y prompts.",
          highlight: false
        },
        {
          category: "Consumo por Minuto",
          value: "$0.14 - $0.20",
          unit: "USD / Minuto",
          detail: "Facturación por uso real. Incluye telefonía + IA.",
          highlight: true
        }
      ],
      note: "*Para obtener una cotización exacta adaptada a Llama Colombia, agenda una demo con nosotros."
    },
    costOfInaction: {
      title: "El Costo de la Inacción",
      highlight: "¿Cuánto cuesta no innovar?",
      description: "Calculado sobre un costo real empresa de $2.782.000 COP (Salario + Prestaciones) por agente:",
      cards: [
        {
          title: "Dinero Desperdiciado",
          value: "$1.670.000 COP",
          unit: "Por Agente / Mes",
          desc: "El 60% del tiempo operativo se pierde en intentos fallidos de llamada. Estás pagando el 60% de tu nómina real sin retorno efectivo.",
          color: "red"
        },
        {
          title: "Costo de Escalar",
          value: "+$8.350.000 COP",
          unit: "Para crecer 50%",
          desc: "Atender un 50% más de volumen requiere contratar ~3 agentes nuevos. Al sumar la carga prestacional real, el costo fijo se dispara.",
          color: "orange"
        },
        {
          title: "Rotación de Personal",
          value: "$4.170.000 COP",
          unit: "Por reemplazo",
          desc: "La rotación cuesta ~1.5x el costo mensual real (reclutamiento, curva de aprendizaje y tiempo de gestión perdido).",
          color: "red"
        }
      ]
    },
    contact: {
      title: "¿Listo para escalar?",
      description: (company: string) => `Lina, tenemos el plan perfecto para ${company}. Empecemos con una prueba piloto.`,
      cta: "Agendar Demo",
      features: [
        "Setup en semanas",
        "Sin costos ocultos",
        "Soporte Local",
        "Cancelación flexible"
      ]
    }
  }
};