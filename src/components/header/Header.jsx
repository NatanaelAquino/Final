import React from "react";
import myClinete from '../../img/cliente.webp'
import'./Header.css'
export const Header = () => {
  return (
    <header className="header">
      <img src={myClinete} alt="" />
      <h5>Olá, XXXXXX</h5>
    </header>
  );
};
