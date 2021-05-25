import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'

import "../styles/components/Navbar.css";

function Navbar() {

  const [isActive, setActive] = useState(false);

  function handleActiveOption(){

  }

  
  return (
      <div className="container-navbar">
        <div id="menu">
          <ul>
            <li><Link to="/" className="link-text">Home</Link></li>
            <li><Link to="/depositos" className="link-text">Depósitos</Link></li>
            <li><Link to="/" className="link-text">Contatos</Link></li>
            <li><Link to="/login" className="link-text">Sobre</Link></li>
          </ul>
        </div>
      </div>       
  );
}

export default Navbar;
