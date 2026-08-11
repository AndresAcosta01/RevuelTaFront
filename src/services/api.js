import axios from 'axios';



const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.escuelajs.co/api/v1',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false,
});


api.interceptors.request.use(
  (config) => {
    const token = (typeof localStorage !== 'undefined') ? localStorage.getItem('token') : null;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);


api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export const get = (url, config) => api.get(url, config).then((r) => r.data);
export const post = (url, data, config) => api.post(url, data, config).then((r) => r.data);
export default api;
