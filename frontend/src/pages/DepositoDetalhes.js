import React, { useRef, useEffect, useState} from 'react';
import { FiArrowLeft, FiUsers } from "react-icons/fi";
import { FaWarehouse, FaNetworkWired, FaMapMarkerAlt, FaLock, FaTools, FaCamera, FaCode, FaCheck, FaWindowClose } from "react-icons/fa";
/* import api from '../services/api.js' */
import { useHistory } from "react-router-dom";

import "../styles/pages/DepositoDetalhes.css";

import gerenteImg from '../assets/img/depositos/oei/funcionarios/gerente_OEI_400x400.jpg'
import chefeDepositoImg from '../assets/img/depositos/oei/funcionarios/chefe_de_deposito_OEI_400x400.jpg'
import funcNum2Img from '../assets/img/depositos/oei/funcionarios/funcionario_num2_OEI_400x400.jpg'
import organogramaImg from '../assets/img/depositos/oei/organograma/organograma_oei.PNG'


import Navbar from "../components/Navbar"

function DepositoDetalhes() {

  const history = useHistory();

  /* const [deposito, setDeposito] = useState([]);
  
   const sigla_deposito = localStorage.getItem('@projetoreciclagem:sigla_deposito');  

   useEffect(() => { 
    async function getDadosDeposito(){     
      const response = await api.get(`/depositos/${sigla_deposito}`)
        setDeposito(response.data);
        console.log(deposito)         
    }   
    getDadosDeposito();    
  },[deposito]) 
  */


  return (
    <>
        <Navbar />
              
        <div className="container-page">
          
          <div className="container-header">
              <button type="button" className="back-button" onClick={history.goBack}>
                <FiArrowLeft size={44} color="#000" />
              </button>
                  <h1 className="dep-name">OEI</h1>
            </div>
          <hr className="hr-border" />
          
          <div className="container-subtitulo">
          <h2 className="subtitulo"><FaWarehouse size={40} color="#FFB905" className="icon-style" /><span style={{"margin-left": "20px"}}>Depósito</span></h2>
          </div>  
          <hr className="hr-border" />

          <div className="container-info-dep">            
            
                    <span className="span-info">Sigla depósito: <span className="span-info-response">OEI</span></span>
                    <span className="span-info">Sigla loja mãe: <span className="span-info-response">OEI</span></span>
                    <span className="span-info">Postos que abastece: <span className="span-info-response">SMP</span></span>
                    <span className="span-info">Representantes que abastece: <span className="span-info-response">SMP</span></span>
                     
            
           
        </div>

          <div className="container-subtitulo">
          <h2 className="subtitulo"><FaCode size={40} color="#FFB905" className="icon-style" /><span style={{"margin-left": "20px"}}>Sistemas implantados</span></h2>
          </div>  
          <hr className="hr-border" />

          <div className="container-subtitulo">
          <h2 className="subtitulo"><FaCamera size={40} color="#FFB905" className="icon-style" /><span style={{"margin-left": "20px"}}>Imagens</span></h2>
          </div>  
          <hr className="hr-border" />

          <div className="container-subtitulo">
          <h2 className="subtitulo"><FaLock size={40} color="#FFB905" className="icon-style" /><span style={{"margin-left": "20px"}}>Itens de segurança</span></h2>
        </div>
        <hr className="hr-border" />

        <table className="tabela">
            <thead>
                <tr>
                    <th >CFTV</th>
                    <th>Vigilante</th>
                    <th>Cachorro</th>
                    <th>Cerca elétrica</th>
                    <th>Botão de pânico</th>
                    <th>Alarme</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><FaCheck size={30} color="#02bd02" /></td>
                    <td><FaWindowClose size={30} color="#e01010" /></td>
                    <td><FaWindowClose size={30} color="#e01010" /></td>
                    <td><FaCheck size={30} color="#02bd02" /></td>
                    <td><FaWindowClose size={30} color="#e01010" /></td>
                    <td><FaWindowClose size={30} color="#e01010" /></td>
                </tr>
                
            </tbody>
        </table>

        <div className="container-subtitulo">
          <h2 className="subtitulo"><FaTools size={40} color="#FFB905" className="icon-style" /><span style={{"margin-left": "20px"}}>Ferramentas e equipamentos</span></h2>
          </div>  
          <hr className="hr-border" />

        
        

        <div className="container-subtitulo">
          <h2 className="subtitulo"><FaMapMarkerAlt size={40} color="#FFB905" className="icon-style" /><span style={{"margin-left": "20px"}}>Localização geográfica</span></h2>
        </div>
        <hr className="hr-border" />

        <div className="container-subtitulo">
          <h2 className="subtitulo"><FiUsers size={40} color="#FFB905" className="icon-style" /><span style={{"margin-left": "20px"}}>Equipe</span></h2>
        </div>
        <hr className="hr-border" />

        
        <div className="container-gerente">
            <img src={gerenteImg} className="img-400x400" alt="Gerente" />
            <div className="container-info">
                    <span className="span-info">Nome completo: <span className="span-info-response">VALDERI RAIMUNDO FERREIRA</span></span>
                    <span className="span-info">Nome de guerra: <span className="span-info-response">VALDERI</span></span>
                    <span className="span-info">Número geral: <span className="span-info-response">43780-8</span></span>
                    <span className="span-info">Data admissão: <span className="span-info-response">01/03/2003</span></span>
                    <span className="span-info">Data de nascimento: <span className="span-info-response">13/03/1978</span></span>
                    <span className="span-info">Contatos: <span className="span-info-response">89 99415-0017</span></span>
                    <span className="span-info">Histórico na empresa: <span className="span-info-response">Iniciou na empresa como montador <br />e após este período virou líder de equipe.</span></span>
            </div>
            <h2 className="texto-funcao">GERENTE</h2>
        </div>
        <div className="container-chefe-dep">
            <img src={chefeDepositoImg} className="img-400x400" alt="chefe do depósito" />
            <div className="container-info">
                    <span className="span-info">Nome completo: <span className="span-info-response">VALDERI RAIMUNDO FERREIRA</span></span>
                    <span className="span-info">Nome de guerra: <span className="span-info-response">VALDERI</span></span>
                    <span className="span-info">Número geral: <span className="span-info-response">43780-8</span></span>
                    <span className="span-info">Data admissão: <span className="span-info-response">01/03/2003</span></span>
                    <span className="span-info">Data de nascimento: <span className="span-info-response">13/03/1978</span></span>
                    <span className="span-info">Contatos: <span className="span-info-response">89 99415-0017</span></span>
                    <span className="span-info">Histórico na empresa: <span className="span-info-response">Iniciou na empresa como montador <br />e após este período virou líder de equipe.</span></span>
            </div>
            <h2 className="texto-funcao">CHEFE DE DEPÓSITO</h2>
        </div>

        <div className="container-func-num2">
            <img src={funcNum2Img} className="img-400x400" alt="Funcionário número 2" />
            <div className="container-info">
                    <span className="span-info">Nome completo: <span className="span-info-response">VALDEMIR ALVES FEITOSA</span></span>
                    <span className="span-info">Nome de guerra: <span className="span-info-response">VALDEMIR</span></span>
                    <span className="span-info">Número geral: <span className="span-info-response">36657-9</span></span>
                    <span className="span-info">Data admissão: <span className="span-info-response">13/11/2020</span></span>
                    <span className="span-info">Data de nascimento: <span className="span-info-response">13/03/1978</span></span>
                    <span className="span-info">Contatos: <span className="span-info-response">89 99405-7962</span></span>
                    <span className="span-info">Histórico na empresa: <span className="span-info-response">Iniciou na empresa como montador <br />e após este período virou líder de equipe.</span></span>
            </div>
            <h2 className="texto-funcao">FUNCIONÁRIO NÚM. 2</h2>
        </div>

        <div className="container-subtitulo">
          <h2 className="subtitulo"><FaNetworkWired size={40} color="#FFB905" className="icon-style" /><span style={{"margin-left": "20px"}}>Organograma do depósito</span></h2>
        </div>
        <hr className="hr-border" />

        <img src={organogramaImg} className="organograma-estilo" alt="organograma do depósito" />

        
       


        

        </div>
        
    </>
  );
}

export default DepositoDetalhes;
