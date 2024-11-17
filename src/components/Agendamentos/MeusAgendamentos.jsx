import React, { useState, useEffect } from 'react';
import './MeusAgendamentos.css';

const MeusAgendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([
    { id: 1, nome: 'Consulta com Dra. Maria', data: '2024-10-25', hora: '14:00' },
    { id: 2, nome: 'Sessão com Psicóloga João', data: '2024-10-26', hora: '16:00' },
    { id: 3, nome: 'Consulta com Dra. Ana', data: '2024-10-28', hora: '10:00' },
  ]);

  return (
    <div className="meus-agendamentos">
      <header className="header">
        <h1>Meus Agendamentos</h1>
      </header>
      <section className="agendamentos-list">
        {agendamentos.length > 0 ? (
          agendamentos.map((agendamento) => (
            <div key={agendamento.id} className="agendamento-card">
              <h2>{agendamento.nome}</h2>
              <p>Data: {agendamento.data}</p>
              <p>Hora: {agendamento.hora}</p>
            </div>
          ))
        ) : (
          <p>Você não tem agendamentos no momento.</p>
        )}
      </section>
    </div>
  );
};

export default MeusAgendamentos;
