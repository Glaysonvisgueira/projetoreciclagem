import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import api from '../services/api.js'

import styles from "../styles/pages/Depositos.module.css";

import Navbar from "../components/Navbar"


export default function Depositos() {

    const [depositos, setDepositos] = useState([]);

    useEffect(() => {
        async function loadDepositos(){      
            const response = await api.get('/depositos')
            setDepositos(response.data);  
        };        
        loadDepositos();  
        //console.log(depositos)      
      }, []);

      async function handleClickDeposito(sigla_dep){
              localStorage.setItem('@projetoreciclagem:sigla_deposito', sigla_dep);
      }

    
      
    return (
        <>
            <Navbar />
            <div className={styles.containerPage}>
                    <div className={styles.containerDepositos}>
                       <div className={styles.wrapper}>
                           {depositos.map(deposito =>
                            <Link to={{
                                pathname: `/depositos/${deposito.sigla_dep.toLowerCase()}`, 
                                state: { "sigla_dep": deposito.sigla_dep }
                                }} className={styles.linkDep}
                                        onClick={() => {handleClickDeposito(deposito.sigla_dep)}}
                                >
                                    <div className={styles.cardDeposito}>
                                        <span className={styles.textDeposito}>{deposito.sigla_dep}</span>
                                    </div>
                                </Link>
                            )}
                           
                       </div>
                 </div>
            </div>
        </>       
    );
  }
  
