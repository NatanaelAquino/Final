import React from 'react'
import './index.css'
import Una from '../../img/Una.png'
import calendario from '../../img/Calendario.png'
const Login = () => {
  return (
    <section id='inicio'>
        <img src={Una} alt="UNA" id='una' />
        <img src={calendario} alt="CALENDARIO" id='calendario' />
        <form>
        </form>
          <input type="submit" value='Cadastrar-se' id='ver'/>
          <input type="submit" value='Já tenho uma conta' id='cin'/>
    </section>
  )
}

export default Login