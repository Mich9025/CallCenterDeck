import { ClientData } from './types';

export const CLIENT_DATA: ClientData = {
  name: "Lina Pérez",
  company: "Llama Colombia",
  role: "Asesora en Ventas",
  email: "linaperez99@outlook.com",
  phone: "+57 311 2384622",
  industry: "Servicios",
  volume: "100-500 llamadas/día",
  painPoint: "Operación manual y baja escalabilidad",
  goal: "Agente de Texto y Voz Automatizado"
};

export const METRICS = {
  currentConversion: 2, // 2% assumed
  projectedConversion: 5, // 5% target
  costPerCallHuman: 1.50, // USD
  costPerCallAI: 0.12, // USD
  dailyVolume: 200 // Avg of B/C tier
};