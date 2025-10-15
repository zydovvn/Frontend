import axios from "axios";

export const API = import.meta.env.VITE_API_URL || "";
const instance = axios.create({
  baseURL: API, // "" -> dùng /api khi dev + proxy
  withCredentials: true, // nếu có cookie session
    headers: {
    "Content-Type": "application/json",
  },



});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
