import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL_DOS, 
  timeout: import.meta.env.VITE_TIMEOUT_PETICION_DOS, 
});

export default api;