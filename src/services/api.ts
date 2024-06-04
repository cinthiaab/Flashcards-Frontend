import axios from "axios";
import { getEstudanteLocalStorage } from "../context/AuthProvider/utils";

export const Api = axios.create({
  baseURL: "https://localhost:8000",
});

// "email": "eve.holt@reqres.in",
// "password": "cityslicka"

Api.interceptors.request.use(
  (config) => {
    // Roda essa função e manda em todas as requisçoes o Authorization
    const estudante = getEstudanteLocalStorage();

    config.headers.Authorization = estudante?.token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
