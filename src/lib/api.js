import axios from "axios";

export const API =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
export { api, API };
