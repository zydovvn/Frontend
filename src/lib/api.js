// src/lib/api.js
import axios from "axios";

// Chỉ khai báo & export MỘT LẦN tên API
const API = import.meta.env.VITE_API_URL ?? "";

// Tạo axios instance dùng chung
const api = axios.create({
  baseURL: API,            // Prod: domain backend; Dev: để "" + Vite proxy
  withCredentials: true,   // nếu dùng cookie
  headers: { "Content-Type": "application/json" },
});

export default api;  // import api from "@/lib/api";
export { API };      // import { API } from "@/lib/api";
