import { useEffect } from "react";
import { createContext, useState } from "react";
import { IAuthProvider, IContext, IEstudante } from "./types";
import {
  getEstudanteLocalStorage,
  LoginRequest,
  setEstudanteLocalStorage,
} from "./utils";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [estudante, setEstudante] = useState<IEstudante | null>();

  useEffect(() => {
    const estudante = getEstudanteLocalStorage();

    if (estudante) {
      setEstudante(estudante);
    }
  }, []);

  async function authenticate(email: string, senha: string) {
    const response = await LoginRequest(email, senha);

    if (response?.status !== 200) {
      console.log(response);
      console.log("Erro ao logar");
    }

    const payload = { token: "ok", email };

    setEstudante(payload);
    setEstudanteLocalStorage(payload);
  }

  function logout() {
    setEstudante(null);
    setEstudanteLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...estudante, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
