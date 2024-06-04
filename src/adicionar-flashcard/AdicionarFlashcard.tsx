import { React } from "react";
import "../operacoes_flashcards.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  async function onFinish(event: React.FormEvent) {
    try {
      event.preventDefault();
      const email = (document.getElementById("email") as HTMLInputElement)
        .value;
      const senha = (document.getElementById("senha") as HTMLInputElement)
        .value;

      

      alert("Login successful");

      navigate("/home");
    } catch (error) {
      alert("Invalid email or password");
      console.error("Erro na solicitação:", error);
      navigate("/login");
    }
  }
  
  return (
    <body>
      	<section class="NomeFlashcard">
		    <h1>Flashcard</h1>
        </section>    
        <section class="container_elementos">
            <div class="elementos-add">
                <form method="POST" onSubmit={onFinish}>
                    <h3>Pergunta</h3>
                    <input type="text" placeholder="Digite a pergunta">
                    <h3>Resposta</h3>
                    <input type="text" placeholder="Digite a resposta">
                    <input type="submit" value="Salvar Flashcard">
                </form>
            </div>
        </section>
    </body>
    );
}

export default Home;
