import React from 'react';

import "../styles/pages/Homepage.css";

import Navbar from "../components/Navbar"

import landingImg from "../assets/landingImg.png";

function Homepage() {
  return (
      <>
        <Navbar />
        <div className="container">
          <div className="landing">
            <div className="text-landing">
              <h1 className="projeto-text">Projeto</h1>
              <h1 className="reciclagem-text">RECICLAGEM</h1>  
              <span className="span-text">Este website agrupa e gerencia as informações 
                coletadas durante as fases do Projeto <span className="span-text-reciclagem">Reciclagem</span>.</span>
              <div className="buttons-container">
                <button className="button-saiba-mais" type="button">Saiba mais</button>
                <button className="button-about" type="button">Sobre a equipe</button>
            
              </div>
              
            </div>
            <div>
            <img src={landingImg} className="landingImg" alt="logística de distribuição" />
          </div>          
          </div>          
        </div>
      </>
  );
}

export default Homepage;
