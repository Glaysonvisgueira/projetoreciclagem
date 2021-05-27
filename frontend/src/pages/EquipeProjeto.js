import React from 'react';
import { Link } from 'react-router-dom'

import styles from "../styles/pages/EquipeProjeto.module.css";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import glaysonImg from '../assets/img/equipereciclagem/glayson.jpg'
import nascimentoImg from '../assets/img/equipereciclagem/nascimento.jpg'
import carlosRafaelImg from '../assets/img/equipereciclagem/carlosrafael.jpg'


function EquipeProjeto() {
  return (
      <div className={styles.containerPage}>
          <Navbar />
          <div className={styles.containerRow}>
              <div className={styles.cardMembro}>

                <img src={glaysonImg} className={styles.imgMembro} />
                
                <h2 className={styles.nomeMembro}>Glayson</h2>
                <p>Contatos:</p>

              </div>
              <div className={styles.cardMembro}>

                <img src={nascimentoImg} className={styles.imgMembro} />

              </div>
              <div className={styles.cardMembro}>
                <img src={carlosRafaelImg} className={styles.imgMembro} />

              </div>
          </div>
          <Footer />
      </div>       
  );
}

export default EquipeProjeto;
