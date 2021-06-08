import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";
import { RiTeamLine } from "react-icons/ri";

import styles from "../styles/pages/EquipeProjeto.module.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import glaysonImg from "../assets/img/equipereciclagem/glayson.jpg";
import nascimentoImg from "../assets/img/equipereciclagem/nascimento.jpg";
import carlosRafaelImg from "../assets/img/equipereciclagem/carlosrafael.jpg";

function EquipeProjeto() {
  return (
    <div className={styles.containerPage}>
      <Navbar />
      <div className={styles.containerSubTitulo}>
        <div className={styles.containerTextoTitulo}>
            <RiTeamLine
                  size={50}
                  color="#FFB905"
                  style={{ "margin-left": "45px", 'vertical-align': 'middle' }}
                />
              <h1 className={styles.subTitulo}>
                
                <span style={{ "margin-left": "20px",  'vertical-align': 'middle'}}>Membros da equipe</span>
              </h1>
        </div>
          <hr className={styles.hrBorder} />
      </div>
     
      <div className={styles.containerRow}>
        
        <div className={styles.cardMembro}>
                    <img src={glaysonImg} className={styles.imgMembro}  alt="Glayson Visgueira"/>
          <div className={styles.containerInfo}>
            <h2 className={styles.nomeMembro}>Glayson Visgueira</h2>
            <div>
              <p className={styles.subTituloInfo}>Contatos:</p>
              <p className={styles.subTituloResponse}>(86) 98886-1362</p>
              <p className={styles.subTituloResponse}>(86) 3194-7723</p>
              <p className={styles.subTituloInfo}>E-mail:</p>
              <p className={styles.subTituloResponse}>glayson.visgueira@</p>
              
            </div>
            <div className={styles.containerButtons}>
              <button className={styles.buttonEmail}>
                E-mail&nbsp;&nbsp;&nbsp;
                <SiMicrosoftoutlook size={30} color="#fff" />
              </button>
              <button className={styles.buttonWhatsapp}>
                Whatsapp&nbsp;&nbsp;&nbsp;
                <FaWhatsapp size={30} color="#fff" />
              </button>
            </div>            
          </div>          
        </div>

        <div className={styles.cardMembro}>
                    <img src={nascimentoImg} className={styles.imgMembro}  alt="Nascimento"/>
          <div className={styles.containerInfo}>
            <h2 className={styles.nomeMembro}>Nascimento</h2>
            <div>
              <p className={styles.subTituloInfo}>Contatos:</p>
              <p className={styles.subTituloResponse}>(86) 99914-1444</p>
              <p className={styles.subTituloResponse}>(86) 3194-7726</p>
              <p className={styles.subTituloInfo}>E-mail:</p>
              <p className={styles.subTituloResponse}>nascimento.araujo@</p>
              
            </div>
            <div className={styles.containerButtons}>
              <button className={styles.buttonEmail}>
                E-mail&nbsp;&nbsp;&nbsp;
                <SiMicrosoftoutlook size={30} color="#fff" />
              </button>
              <button className={styles.buttonWhatsapp}>
                Whatsapp&nbsp;&nbsp;&nbsp;
                <FaWhatsapp size={30} color="#fff" />
              </button>
            </div>            
          </div>          
        </div>

        <div className={styles.cardMembro}>
                    <img src={carlosRafaelImg} className={styles.imgMembro}  alt="Carlos Rafael"/>
          <div className={styles.containerInfo}>
            <h2 className={styles.nomeMembro}>Carlos Rafael</h2>
            <div>
              <p className={styles.subTituloInfo}>Contatos:</p>
              <p className={styles.subTituloResponse}>(86) 98885-3825</p>
              <p className={styles.subTituloResponse}>(86) 3194-7735</p>
              <p className={styles.subTituloInfo}>E-mail:</p>
              <p className={styles.subTituloResponse}>carlos.rafael@</p>
              
            </div>
            <div className={styles.containerButtons}>
              <button className={styles.buttonEmail}>
                E-mail&nbsp;&nbsp;&nbsp;
                <SiMicrosoftoutlook size={30} color="#fff" />
              </button>
              <button className={styles.buttonWhatsapp}>
                Whatsapp&nbsp;&nbsp;&nbsp;
                <FaWhatsapp size={30} color="#fff" />
              </button>
            </div>            
          </div>          
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default EquipeProjeto;
