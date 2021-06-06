import React from "react";

import { FiArrowLeft } from "react-icons/fi";


import styles from "../styles/pages/SobreProjeto.module.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SobreProjeto() {
  return (
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
  );
}

export default SobreProjeto;
