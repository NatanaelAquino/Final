import React from "react";
import "./MeusAgendamentos.css";
const MeusAgendamentos = () => {
  return (
    <div className="card">
      <div className="icon"></div>
      <div className="container">
        <article>
          <section className="data">
            <p>Especialidade</p>
            <p>24.09.2024</p>
          </section>
          <section className="nome">
            <h1>Dr. Nome Sobrenome</h1>
          </section>
          <section className="btns">
            <button className="remarcar"></button>
            <button className="cancelar"></button>
          </section>
        </article>
      </div>
    </div>
  );
};

export default MeusAgendamentos;
