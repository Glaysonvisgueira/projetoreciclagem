import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'

import api from '../services/api.js'

import "../styles/pages/Depositos.css";

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

      async function handleClickDeposito(sigla_dep){localStorage.setItem('@projetoreciclagem:sigla_deposito', sigla_dep);
      }

    
      
    return (
        <>
            <Navbar />
            <div className="container">
                    <div className="container-depositos">
                       <div className="wrapper">
                           {depositos.map(deposito =>
                            <Link to={{
                                pathname: `/depositos/${deposito.sigla_dep.toLowerCase()}`, 
                                state: { "sigla_dep": deposito.sigla_dep }
                                }} className="link-dep"
                                        onClick={() => {handleClickDeposito(deposito.sigla_dep)}}
                                >
                                    <div className="card-deposito">
                                        <span className="text-deposito">{deposito.sigla_dep}</span>
                                    </div>
                                </Link>
                            )}
                           
                       </div>
                 </div>
            </div>
        </>       
    );
  }
  

 /*  <div className="card-deposito">
                                    <span className="text-deposito">BAC</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BDE</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BDF</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">IDC</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BAC</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BDE</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BDF</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">IDC</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BAC</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BDE</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BDF</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">IDC</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BAC</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BDE</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BDF</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">IDC</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BAC</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BDE</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BDF</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">IDC</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BAC</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BDE</span>
                            </div>
                            <div className="card-deposito">
                                    <span className="text-deposito">BDF</span>
                            </div> */