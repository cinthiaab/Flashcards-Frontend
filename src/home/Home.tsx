import { React } from "react";
import "./style_menu.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function iniciarEstudo() {
    navigate("/cadastro");
  }
  function novoFlashcard() {
    navigate("/adicionar-flashcard");
  }
  function removerFlashcard() {
    navigate("/remover-flashcard");
  }
  function compartilharFlashcard() {
    navigate("/cadastro");
  }
  function verTodosFlashcards() {
    navigate("/cadastro");
  }
  return (
    <body>
      <section className="NomeFlashcard">
        <h1>Flashcard</h1>
      </section>
      <section className="area-fora">
        <div className="area-botoes">
          <a onClick={iniciarEstudo} className="btn-link">
            Iniciar Estudo
          </a>
          <a onClick={novoFlashcard} className="btn-link">
            Adicionar Flashcard
          </a>
          <a onClick={removerFlashcard} className="btn-link">
            Remover Flashcard
          </a>
          <a onClick={compartilharFlashcard} className="btn-link">
            Trocar Flashcard
          </a>
          <a onClick={verTodosFlashcards} className="btn-link">
            Ver seus Flashcards
          </a>
        </div>
      </section>
    </body>
  );
}

export default Home;
