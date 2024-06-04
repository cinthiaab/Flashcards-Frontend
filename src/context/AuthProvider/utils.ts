import { IEstudante } from "./types";
import { Api } from "./../../services/api";

export function setEstudanteLocalStorage(estudante: IEstudante | null) {
  localStorage.setItem("u", JSON.stringify(estudante));
}

export function getEstudanteLocalStorage() {
  const json = localStorage.getItem("u");

  if (!json) {
    return null;
  }

  const estudante = JSON.parse(json);

  return estudante ?? null;
}

export async function LoginRequest(email: string, senha: string) {
  try {
    const request = await Api.post("/login", { email, senha });
    console.log(request);
    return request;
  } catch (error) {
    return null;
  }
}
