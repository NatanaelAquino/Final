import React from "react";
import "./login.css";
import Una from "../../../img/Una.png";
import calendario from "../../../img/login.png";
const Login = () => {
  return (
    <section id="login">
      <img src={Una} alt="UNA" id="una" />
      <img src={calendario} alt="CALENDARIO" id="img-login" />
      <form className="">
        <input type="text" placeholder="RA"/>
        <input type="text" placeholder="SENHA" />
        <spna id='checkbox' >
        <input type="checkbox" id="topping" name="topping"/>Manter conectado
        </spna>
        <input type="submit" value={"conectar"}/>
      </form>
    </section>
  );
};

export default Login;
