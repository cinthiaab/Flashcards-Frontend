import React from "react";
import "./style_login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider/useAuth";

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  async function onFinish(event: React.FormEvent) {
    try {
      event.preventDefault();
      const email = (document.getElementById("email") as HTMLInputElement)
        .value;
      const senha = (document.getElementById("senha") as HTMLInputElement)
        .value;

      await auth.authenticate(email, senha);

      alert("Login successful");

      navigate("/home");
    } catch (error) {
      alert("Invalid email or password");
      console.error("Erro na solicitação:", error);
      navigate("/login");
    }
  }

  function cadastrar() {
    navigate("/cadastro");
  }

  return (
    <div>
      <section className="area-login">
        <div className="login">
          <div>
            <h1>LOGIN</h1>
          </div>
          <form method="POST" onSubmit={onFinish}>
            <h3>E-mail</h3>
            <input type="email" placeholder="seu email" id="email" />
            <h3>Senha</h3>
            <input type="password" placeholder="sua senha" id="senha" />
            <input type="submit" value="Entrar" />
          </form>
          <p>
            Não tem login?<a onClick={cadastrar}> Cadastre-se </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;
