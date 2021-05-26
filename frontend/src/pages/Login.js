import React from 'react';
import { FiArrowRight } from "react-icons/fi";

import "../styles/pages/Login.css";

function Login() {
  return (
   
      <div className="login-container">
         
        <div className="login-card">
          
        <div>
            <h3>Sistema de acesso</h3>
          </div>
                   <form>
                    
                    <input 
                      placeholder="Digite seu usuário..."
                    />
                    
                    <input 
                      placeholder="Digite sua senha..."
                    />
                    <button className="button" type="submit">Enviar <FiArrowRight size={24} /></button>
                    <div className="link-login-container">
                      <small className="link-login">Esqueceu sua senha?</small>
                      <small className="link-login">Cadastre-se</small>
                    </div>
                        
                  </form>
            </div>
               
                 <span className="versao-texto">Versão: 1.0</span>
               
          </div>
       
  );
}

export default Login;
