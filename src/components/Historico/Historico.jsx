import React from "react";
import "./Historico.css";
const Historico = () => {
  return (
    <div className="Card-historico">
      <div className="card-icons"></div>
      <div className="card-conteudo">
          <section className="data-historico">
            <p>Especialidade</p>
            <p>24.09.2024</p>
          </section>
          <section className="nome-historico">
            <h1>Dr. Nome Sobrenome</h1>
          </section>
      </div>
    </div>
  );
};

export default Historico;
