import React from 'react';

import styles from "../styles/pages/Login.module.css";

import loginPageImg from '../assets/img/systemlogin.png'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Login() {
  return (
   
      <div className={styles.containerPage}>
         
          <div className={styles.container}>
         
        <div className={styles.loginCard}>
          
       
                   <form className={styles.formContainer}>
                    
                    <input className={styles.inputForm}
                      placeholder="Digite seu e-mail..."
                    />
                    
                    <input className={styles.inputForm}
                      placeholder="Digite sua senha..."
                    />
                    <button className={styles.button} type="submit">Login</button>
                    
                        
                  </form>
            <img src={loginPageImg} className={styles.loginPageImg} alt="logística de distribuição" />   
            </div>
               
              
          </div>
         
             <Footer />        
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