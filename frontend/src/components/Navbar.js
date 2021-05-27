import React from 'react';
import { Link } from 'react-router-dom'

import styles from "../styles/components/Navbar.module.css";

function Navbar() {
  return (
      <div className={styles.containerNavbar}>
        <div id={styles.menu}>
          <ul>
            <li><Link to="/" className={styles.linkText}>Home</Link></li>
            <li><Link to="/depositos" className={styles.linkText}>Depósitos</Link></li>
            <li><Link to="/mapa-depositos" className={styles.linkText}>Mapa</Link></li>
            <li><Link to="/" className={styles.linkText}>Contatos</Link></li>
            <li><Link to="/login" className={styles.linkText}>Sobre</Link></li>
          </ul>
        </div>
      </div>       
  );
}

export default Navbar;
