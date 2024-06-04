export interface IEstudante {
  email?: string;
}

export interface IContext extends IEstudante {
  authenticate: (email: string, senha: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
