import React from 'react';
import { NavLink } from 'react-router-dom'
import { GoGear } from "react-icons/go";

import styles from "../styles/components/Navbar.module.css";

function Navbar() {
  return (
      <div className={styles.containerNavbar}>
        <div className={styles.containerOptions}>         
            <div className={styles.menuLeft}>
              <NavLink 
                to="/" 
                className={styles.linkText}
                >Home</NavLink>

              <NavLink 
                to="/depositos" 
                className={styles.linkText}
                activeClassName="activeRoute"
                activeStyle={{ 'color': '#FFB905', 'font-weight': 'bold' }}>Depósitos</NavLink>

              <NavLink 
                to="/mapa-depositos"
                className={styles.linkText}
                activeClassName="activeRoute"
                activeStyle={{ 'color': '#FFB905', 'font-weight': 'bold' }}>Mapa</NavLink>

              <NavLink 
                to="/contatos-equipe" 
                className={styles.linkText}
                activeClassName="activeRoute"
                activeStyle={{ 'color': '#FFB905', 'font-weight': 'bold' }}>Contatos</NavLink>

              <NavLink 
                to="/sobre" 
                className={styles.linkText}
                activeClassName="activeRoute"
                activeStyle={{ 'color': '#FFB905', 'font-weight': 'bold' }}>Sobre</NavLink>

            </div>
            <div className={styles.menuRight}>
            <NavLink 
                to="/login" 
                className={styles.optionIcon}
                activeClassName="activeRoute"
                activeStyle={{ 'color': '#fff', 'font-weight': 'bold' }}>
                <GoGear size={35} color="rgb(39, 39, 39)" />
            </NavLink>
              
            </div>
        </div>
      </div>       
  );
}

export default Navbar;

/* 

<div className={styles.containerNavbar}>
        <div id={styles.menu}>
          <ul>
            <li><Link to="/" className={styles.linkText}>Home</Link></li>
            <li><Link to="/depositos" className={styles.linkText}>Depósitos</Link></li>
            <li><Link to="/mapa-depositos" className={styles.linkText}>Mapa</Link></li>
            <li><Link to="/contatos-equipe" className={styles.linkText}>Contatos</Link></li>
            <li><Link to="/login" className={styles.linkText}>Sobre</Link></li>
          </ul>
          
        </div>
      </div>      */