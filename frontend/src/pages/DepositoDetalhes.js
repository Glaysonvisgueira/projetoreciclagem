import React from 'react';
import { FiArrowLeft, FiUsers } from "react-icons/fi";
import { FaWarehouse, FaNetworkWired, FaMapMarkerAlt, FaLock, FaTools, FaCamera, FaCode, FaCheck, FaWindowClose } from "react-icons/fa";
/* import api from '../services/api.js' */
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import { useHistory } from "react-router-dom";

import styles from "../styles/pages/DepositoDetalhes.module.css";

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
        
              
        <div className={styles.containerPage}>
          
          <div className={styles.containerHeader}>              
                  <h1 className={styles.depName}>Detalhes do depósito de OEI</h1>
                  <button type="button" className={styles.backButton} onClick={history.goBack}>
                    <FiArrowLeft size={44} color="#000" />
                  </button>
            </div>
         
          
          <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}><FaWarehouse size={40} color="#FFB905" className={styles.iconStyle} /><span style={{"margin-left": "20px"}}>Detalhes sobre o depósito</span></h2>
          </div>  
          <hr className={styles.hrBorder} />

          <div className={styles.containerInfoDep}>            
            
                    <span className={styles.spanInfo}>Sigla depósito: <span className={styles.spanInfoResponse}>OEI</span></span>
                    <span className={styles.spanInfo}>Sigla loja mãe: <span className={styles.spanInfoResponse}>OEI</span></span>
                    <span className={styles.spanInfo}>Cidade: <span className={styles.spanInfoResponse}>Oeiras</span></span>
                    <span className={styles.spanInfo}>UF: <span className={styles.spanInfoResponse}>PI</span></span>
                    <span className={styles.spanInfo}>Anexo a loja? <span className={styles.spanInfoResponse}>SMP</span></span>
                    <span className={styles.spanInfo}>Fecha para almoço? <span className={styles.spanInfoResponse}>SMP</span></span> 
                    <span className={styles.spanInfo}>Cliente retira? <span className={styles.spanInfoResponse}>SMP</span></span>
                    <span className={styles.spanInfo}>Área de CRP? <span className={styles.spanInfoResponse}>SMP</span></span>
                    <span className={styles.spanInfo}>Área de logística reversa? <span className={styles.spanInfoResponse}>SMP</span></span>
                    <span className={styles.spanInfo}>Área de TAT? <span className={styles.spanInfoResponse}>SMP</span></span>
                    <span className={styles.spanInfo}>Postos que abastece: <span className={styles.spanInfoResponse}>SMP</span></span>
                    <span className={styles.spanInfo}>Representantes que abastece: <span className={styles.spanInfoResponse}>SMP</span></span>
           
        </div>

          <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}><FaCode size={40} color="#FFB905" className={styles.iconStyle} /><span style={{"margin-left": "20px"}}>Sistemas implantados</span></h2>
          </div>  
          <hr className={styles.hrBorder} />

          <table className={styles.tabela}>
            <thead>
                <tr>
                    <th >Venda Remota</th>
                    <th>Control Mobile</th>
                    <th>WMS</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><FaCheck size={30} color="#02bd02" /></td>
                    <td><FaWindowClose size={30} color="#e01010" /></td>
                    <td><FaWindowClose size={30} color="#e01010" /></td>
                    
                </tr>
                
            </tbody>
        </table>

          <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}><FaCamera size={40} color="#FFB905" className={styles.iconStyle} /><span style={{"margin-left": "20px"}}>Imagens</span></h2>
          </div>  
          <hr className={styles.hrBorder} />

          <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}><FaLock size={40} color="#FFB905" className={styles.iconStyle} /><span style={{"margin-left": "20px"}}>Itens de segurança</span></h2>
        </div>
        <hr className={styles.hrBorder} />

        <table className={styles.tabela}>
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

        <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}><FaTools size={40} color="#FFB905" className={styles.iconStyle} /><span style={{"margin-left": "20px"}}>Ferramentas e equipamentos</span></h2>
          </div>  
          <hr className={styles.hrBorder} />

          <table className={styles.tabela}>
            <thead>
                <tr>
                    <th>Porta Pallet</th>
                    <th>Pallet</th>
                    <th>Rack de movimentação</th>
                    <th>Carrinho plataforma</th>
                    <th>Balança digital</th>
                    <th>Balança</th>
                    <th>Esteira</th>
                    <th>Empilhadeira a gás</th>
                    <th>Empilhadeira elétrica</th>
                    <th>Transpaleteira manual</th>
                    <th>Transpaleteira elétrica</th>
                    <th>Escada de plataforma</th>
                    <th>Carrinho de armazenagem</th>
                    <th>Caixa azul</th>
                    <th>Movimentador de vidro</th>
                    <th>Armazenador de vidro</th>
                    <th>Gaiola de portáteis</th>
                    
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
                    <td><FaCheck size={30} color="#02bd02" /></td>
                    <td><FaWindowClose size={30} color="#e01010" /></td>
                    <td><FaWindowClose size={30} color="#e01010" /></td>
                    <td><FaCheck size={30} color="#02bd02" /></td>
                    <td><FaWindowClose size={30} color="#e01010" /></td>
                    <td><FaWindowClose size={30} color="#e01010" /></td>
                    <td><FaCheck size={30} color="#02bd02" /></td>
                    <td><FaWindowClose size={30} color="#e01010" /></td>
                    <td><FaWindowClose size={30} color="#e01010" /></td>
                    <td><FaCheck size={30} color="#02bd02" /></td>
                    <td><FaWindowClose size={30} color="#e01010" /></td>                    
                </tr>
                
            </tbody>
        </table>
 
        
        

        <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}><FaMapMarkerAlt size={40} color="#FFB905" className={styles.iconStyle} /><span style={{"margin-left": "20px"}}>Localização</span></h2>
        </div>
        <hr className={styles.hrBorder} />
        
        <MapContainer 
          center={[-7.0131848, -42.1332168]}
          zoom={13}
          style={{width: '100%', height: '500px', 'margin-top': '15px'}}
          scrollWheelZoom={false}
          >
            <TileLayer 
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-7.0131848, -42.1332168]}>
            <Popup>
              <span>Aqui está o depósito de Oeiras!</span>
            </Popup>
        </Marker>
          </MapContainer>
        <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}><FiUsers size={40} color="#FFB905" className={styles.iconStyle} /><span style={{"margin-left": "20px"}}>Lideranças</span></h2>
        </div>
        <hr className={styles.hrBorder} />

        <div className={styles.containerChefes}>
        <div className={styles.containerChefeDep2}>           
          <div className={styles.asideChefedep}>
              <img src={chefeDepositoImg} className={styles.imgNew} alt="Gerente" />
              <h2 className={styles.nameDep}>Chefe de depósito</h2>
          </div>
          <div className={styles.asideRight}>
          <hr className={styles.hrNew} />
                <div className={styles.containerInfo2}>
                        <div className={styles.containerTextInfo2}>
                          <span >Nome de guerra: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Nome completo: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Número geral: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Data de admissão: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Data de nascimento: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Contatos: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Histórico na empresa: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>  
                </div>

          </div>
            
        </div>
        <div className={styles.containerChefeDep2}>
          <div className={styles.asideChefedep}>
              <img src={gerenteImg} className={styles.imgNew} alt="Gerente" />
              <h2 className={styles.nameDep}>Gerente</h2>
          </div>
          <div className={styles.asideRight}>
          <hr className={styles.hrNew} />
                <div className={styles.containerInfo2}>
                        <div className={styles.containerTextInfo2}>
                          <span >Nome completo: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Nome completo: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Nome completo: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Nome completo: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Nome completo: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Nome completo: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Histórico na empresa: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>  
                        
                        
                </div>

          </div>
            
        </div>

        <div className={styles.containerChefeDep2}>
          <div className={styles.asideChefedep}>
              <img src={funcNum2Img} className={styles.imgNew} alt="Funcionário número 2" />
              <h2 className={styles.nameDep}>Funcionário número 2</h2>
          </div>
          <div className={styles.asideRight}>
          <hr className={styles.hrNew} />
                <div className={styles.containerInfo2}>
                        <div className={styles.containerTextInfo2}>
                          <span >Nome completo: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Nome completo: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Nome completo: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Nome completo: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Nome completo: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Nome completo: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>
                        <div className={styles.containerTextInfo2}>
                          <span >Histórico na empresa: </span>
                          <span >VALDEMIR ALVES FEITOSA</span>                          
                        </div>  
                        
                        
                </div>

          </div>
            
        </div>
        
        </div>




        <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}><FaNetworkWired size={40} color="#FFB905" className={styles.iconStyle} /><span style={{"margin-left": "20px"}}>Organograma do depósito</span></h2>
        </div>
        <hr className={styles.hrBorder} />

        <img src={organogramaImg} className={styles.organogramaEstilo} alt="organograma do depósito" />

        


        

        </div>
        
    </>
  );
}

export default DepositoDetalhes;
