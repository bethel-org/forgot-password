import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3003/",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

export const post = async (endpoint: string, data?: unknown, options = {}) => {
  const response = await api.post(endpoint, data, options);
  return response?.data;
};

export default api;
