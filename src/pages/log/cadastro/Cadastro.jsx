import React from "react";
import "./Cadastro.css";
import Una from "../../../img/Una.png";

const Cadastro = () => {
  return (
    <section id="cadastro">
      <img src={Una} alt="UNA" id="una" />
      <form>
        <input type="text" value={"Nome"}/>
        <input type="text" value={"RA"}/>
        <input type="text" value={"E-mail"}/>
        <input type="text" value={"Senha"}/>
        <spna id='checkbox' >
        <input type="checkbox" id="topping" name="topping"/>Manter conectado
        </spna>
        <spna id='checkbox' >
        <input type="checkbox" id="topping" name="topping"/>Autorizar termos de uso 
        </spna>
        <input type="submit" />
      </form>
    </section>
  );
};

export default Cadastro;
