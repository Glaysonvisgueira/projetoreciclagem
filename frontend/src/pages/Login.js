import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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


/* 

<div className="card m-3 p-4 border-secondary shadow-lg p-3 mb-5  rounded d-flex justify-content-center">
            <div className="card-body">
              <h3 className="card-title text-center font-weight-bold">Sistema de login</h3>
                <form className="mt-5">
                      <div className="form-group">
                        <label for="exampleInputEmail1">Usuário</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insira seu usuário..." />
                        <small id="emailHelp" className="form-text text-muted">Nunca compartilhamos sua senha com terceiros.</small>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Senha</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Insira sua senha..." />
                      </div>
                      <div className="mt-3">
                        <button type="submit" className="btn btn-warning btn-block font-weight">Login</button>
                      </div>
                      <div class="card-footer bg-transparent border-secondary mt-4"><small>Qualquer dúvida entre em contato.</small></div>
                </form>
               
          </div>
        </div>
 */