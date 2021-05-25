import React, {useEffect, useState} from 'react';
import api from '../services/api.js'
import { Link } from 'react-router-dom'

import "../styles/pages/DepositoDetalhes.css";

import Navbar from "../components/Navbar"

function DepositoDetalhes() {

  const [depositoObject, setDeposito] = useState([]); 

  const sigla_deposito = "this.props.location.state;"

  useEffect(() => {
    async function getDadosDeposito(){
      const response = await api.get(`/depositos/${sigla_deposito}`);
      setDeposito(response.data);
      
    }

    getDadosDeposito();


  }, [])


  return (
    <>
        <Navbar />
    </>
  );
}

export default DepositoDetalhes;
