import axios from "axios";
import { getUserToken } from "./auth";

const api = axios.create({
  headers: {
    "Content-type": "application/json"
  }
});

api.interceptors.request.use(async config => {
  const token = getUserToken();

  if (token) {
    config.headers["ecamara-token"] = `${token}`;
  }

  return config;
});

export default api;
