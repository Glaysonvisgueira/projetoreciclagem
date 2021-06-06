import React from 'react';

import styles from "../styles/pages/Homepage.module.css";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import landingImg from "../assets/landingImg.png";

function Homepage() {
  return (
      <>
        
        <div className={styles.container}>
        <Navbar />
          <div className={styles.landing}>
            <div className={styles.textLanding}>
              <h1 className={styles.projetoText}>Projeto</h1>
              <h1 className={styles.reciclagemText}>RECICLAGEM</h1>  
              <span className={styles.spanText}>Este website agrupa e gerencia as informações 
                coletadas durante as fases do Projeto <span className={styles.spanTextReciclagem}>Reciclagem</span>.</span>
              <div className={styles.buttonsContainer}>
                <button className={styles.buttonSaibaMais} type="button">Saiba mais</button>
                {/* <button className={styles.buttonAbout} type="button">Sobre a equipe</button> */}
            
              </div>
              
            </div>
            <div>
            <img src={landingImg} className={styles.landingImgView} alt="logística de distribuição" />
          </div>          
          </div>  
          <Footer />  
        </div>
           
       
      </>
  );
}

export default Homepage;
