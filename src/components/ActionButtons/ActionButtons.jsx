import React from "react";
import { Link } from "react-router-dom"; // Importando Link do react-router-dom
import myImg from "../../img/login.png";
import "./ActionButtons.css";

const ActionButtons = () => {
  return (
    <section className="action-buttons">
      <Link to="/Agendar">
        <figure>
          <img src={myImg} alt="Ícone de agendamento" />
        </figure>
        <span>
          <h3>Agendar</h3>
          <p>
            Agende aqui a sua consulta com os profissionais disponíveis na UNA
          </p>
        </span>
      </Link>
      <Link to="/Agendamentos">
        <figure>
          <img src={myImg} alt="Ícone de agendamentos" />
        </figure>
        <span>
          <h3>Meus Agendamentos</h3>
          <p>Confira aqui as suas consultas</p>
        </span>
      </Link>
    </section>
  );
};

export default ActionButtons;
