import React from 'react';
import { Link } from 'react-router-dom'

import "../styles/components/Navbar.css";

function Navbar() {
  return (
      <div className="container">
        <nav id="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Depósitos</Link></li>
            <li><Link to="/">Contatos</Link></li>
            <li><Link to="/">Sobre</Link></li>
          </ul>
        </nav>
        <div>
          
        </div>
      </div>       
  );
}

export default Navbar;
