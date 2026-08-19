// 1. Creación de la instancia global
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // URL base del Backend
  timeout: import.meta.env.VITE_TIMEOUT_PETICION, // Abortar si tarda más de 5 segundos
});