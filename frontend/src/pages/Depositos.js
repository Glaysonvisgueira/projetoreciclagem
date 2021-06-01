import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { BsGrid3X3Gap } from "react-icons/bs";

import api from '../services/api.js'

import styles from "../styles/pages/Depositos.module.css";

import Navbar from "../components/Navbar"
import Loading from "../components/Loading"
import Footer from "../components/Footer"


export default function Depositos() {

    const [depositos, setDepositos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadDepositos(){      
            const response = await api.get('/depositos')
            setDepositos(response.data); 
            setLoading(false); 
        };        
        loadDepositos();  
        //console.log(depositos)      
      }, []);

      async function handleClickDeposito(sigla_dep){
              localStorage.setItem('@projetoreciclagem:sigla_deposito', sigla_dep);
      }

    if(loading){
        return (
            <>
                <Navbar />
                <Loading />
                <Footer />
            </>
        )
    }
      
    return (
        <>
            <div className={styles.containerPage}>
                <Navbar />
                    <div className={styles.containerSubTitulo}>
                         <BsGrid3X3Gap size={40} color="#FFB905" className={styles.iconStyle} />
                        <h2 className={styles.subTitulo}><span style={{"margin-left": "20px"}}>Selecione um depósito</span></h2>
                    </div>  
                    <hr className={styles.hrBorder} />
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
                <Footer />
            </div>
        </>       
    );
  }
  
