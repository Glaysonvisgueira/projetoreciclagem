import React, { useState } from 'react';

import styles from "../styles/pages/Login.module.css";

import loginPageImg from '../assets/img/systemlogin.png'

import { AiOutlineLogin } from "react-icons/ai";

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailChecked, setEmailChecked] = useState();
  
  
  
  //console.log(`Email: ${emailChecked}`)
  
  return (

    <div className={styles.containerPage}>
      <div className={styles.container}>
        <div className={styles.loginCard}>
          
          <form className={styles.formContainer} >
            
            <input className={emailChecked.includes('mail') ? styles.inputForm2 : styles.inputForm} 
              type="text"
              maxLength="60"             
              placeholder="Digite seu e-mail..."
              value={email}
              onChange={e => {setEmail(e.target.value); setEmailChecked(e.target.value);}}
              autoCapitalize={false}
              autoCorrect={false}
              required={true}
              spellCheck={false}
            />
            <input className={styles.inputForm}
              type="password"
              placeholder="Digite sua senha..."              
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoCapitalize={false}
              autoCorrect={false}
              required={true}
              spellCheck={false}
            />
            <button className={styles.button} type="submit">Login&nbsp;<AiOutlineLogin size={34} color="#fff" /></button>

            <div className={styles.containerSmallText}>
              <small className={styles.smallLink}>Esqueceu a senha?</small>
              <small className={styles.smallLink}>Solicite o acesso</small>
            </div>
          </form>
          <img src={loginPageImg} className={styles.loginPageImg} alt="logística de distribuição" />
        </div>
      </div>
      <div className={styles.containerFooter}>
        <p className={styles.textoFooter}>Versão 0.01a - Setor de padronização de depósitos</p>
      </div> 
    </div>

  );
}

export default Login;



{/* <div className={styles.loginContainer}>
          <Navbar />
        <div className={styles.loginCard}>
          
        <div>
            <h3>Sistema de acesso</h3>
          </div>
                   <form className="formContainer">
                    
                    <input 
                      placeholder="Digite seu usuário..."
                    />
                    
                    <input 
                      placeholder="Digite sua senha..."
                    />
                    <button className={styles.button} type="submit">Enviar <FiArrowRight size={24} /></button>
                    <div className={styles.linkLoginContainer}>
                      <small className={styles.linkLogin}>Esqueceu sua senha?</small>
                      <small className={styles.linkLogin}>Cadastre-se</small>
                    </div>
                        
                  </form>
            </div>
               
                 <span className={styles.versaoTexto}>Versão: 1.0</span>
               
          </div>
 */}