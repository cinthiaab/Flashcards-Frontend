import React from "react";
import { useNavigate } from "react-router-dom";
import "./style_cadastro.css";

function Cadastro() {
  const navigate = useNavigate();

  const handleCadastro = async (event: React.FormEvent) => {
    event.preventDefault();

    const email = document.getElementById("email") as HTMLInputElement;
    const nome = document.getElementById("nome") as HTMLInputElement;
    const senha = document.getElementById("senha") as HTMLInputElement;

    if (email.value === "" || nome.value === "" || senha.value === "") {
      alert("Preencha todos os campos");
    } else {
      try {
        console.log(nome.value, email.value, senha.value);
        const response = await fetch("http://localhost:8000/estudantes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: nome.value,
            email: email.value,
            senha: senha.value,
            flashcards: null,
          }),
        });

        if (response.ok) {
          alert("Estudante cadastrado com sucesso");
          navigate("/login");
        } else {
          const errorData = await response.json();
          console.error("Erro na resposta da API:", errorData);
          alert("Erro ao cadastrar estudante");
        }
      } catch (error) {
        console.error("Erro na solicitação:", error);
        alert(
          "Erro ao cadastrar estudante. Verifique sua conexão e tente novamente."
        );
      }
    }
  };

  return (
    <div>
      <section className="area-login">
        <div className="login">
          <div>
            <h1>CADASTRO</h1>
          </div>
          <form onSubmit={handleCadastro}>
            <h3>E-mail</h3>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="seu email"
              autoFocus
            />
            <h3>Nome</h3>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="seu nome"
              autoFocus
            />
            <h3>Senha</h3>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="sua senha"
            />
            <input type="submit" value="Cadastrar" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Cadastro;
