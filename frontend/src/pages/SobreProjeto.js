import React from "react";
import { FullPage, Slide } from 'react-full-page';
import PageProgress from 'react-page-progress'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";


import styles from "../styles/pages/SobreProjeto.module.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import landingImg from "../assets/landingImg.png";

/*  BIBLIOTECAS FRONTEND
https://nodlik.github.io/started
https://eb1.it/react-animated-slider/
https://sag1v.github.io/react-elastic-carousel/
https://reactjsexample.com/a-tiny-library-for-building-tooltips-and-flyovers-in-react/
https://reactjsexample.com/dead-simple-loading-components-for-react-and-react-native/
 */

function SobreProjeto() {
  return (
          <>
          <Link to="/">
            <button
                type="button"
                className={styles.backButton}
              >
                <FiArrowLeft size={44} color="#000" />
              </button>
          </Link>
        <PageProgress color={'#FFB905'} height={5}/>
        <div className={styles.containerPage}>
       
               
        <FullPage controls={false} scrollMode={'full-page'}>
       
        <Slide className={styles.containerSlide}>
        
          <div className={styles.landing}>
            <div className={styles.textLanding}>
              <h1 className={styles.projetoText}>Projeto</h1>
              <h1 className={styles.reciclagemText}>RECICLAGEM</h1>  
              <span className={styles.spanText}>Este website agrupa e gerencia as informações 
                coletadas durante as fases do Projeto <span className={styles.spanTextReciclagem}>Reciclagem</span>.</span>
              <div className={styles.buttonsContainer}>
               
                <Link to="/depositos"  className={styles.buttonSaibaMais} type="button">Saiba mais</Link>
                {/* <button className={styles.buttonAbout} type="button">Sobre a equipe</button> */}

              </div>
              
            </div>
            <div>
            <img src={landingImg} className={styles.landingImgView} alt="logística de distribuição" />
          </div>          
        
          
        </div>
          
        </Slide>
        <Slide className={styles.containerSlide}>
       
          <h1>Another slide content</h1>
        </Slide>
        <Slide className={styles.containerSlide}>
      
          <h1>Another slide content</h1>
        </Slide>
        <Slide className={styles.containerSlide}>
       
                <h1>Another slide content</h1>
        </Slide>
        <Slide className={styles.containerSlide}>
       
          <h1>Another slide content</h1>
        </Slide>
         <Slide className={styles.containerSlide}>
         
          <h1>Another slide content</h1>
        </Slide>
       
      </FullPage>
      
      </div>
     
      </>
  );
}

export default SobreProjeto;



<div className={styles.containerPage}>
      <Navbar />
        <div>
            <div className={styles.gridOptions}>
                <div className={styles.cardOption}>
                        <FiArrowLeft size={60} color="#FFB905" />
                </div>
                <div className={styles.cardOption}>
                <FiArrowLeft size={60} color="#FFB905" />
                        
                </div>
                <div className={styles.cardOption}>
                        <FiArrowLeft size={60} color="#FFB905" />
                </div>
                <div className={styles.cardOption}>
                        <FiArrowLeft size={60} color="#FFB905" />
                </div>
                <div className={styles.cardOption}>
                        <FiArrowLeft size={60} color="#FFB905" />
                </div>
                <div className={styles.cardOption}>
                        <FiArrowLeft size={60} color="#FFB905" />
                </div>
                <div className={styles.cardOption}>
                        <FiArrowLeft size={60} color="#FFB905" />
                </div>
                 <div className={styles.cardOption}>
                        <FiArrowLeft size={60} color="#FFB905" />
                </div>
            </div>
        </div>
      <Footer />
    </div>
