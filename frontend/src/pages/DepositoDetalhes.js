import React, { useState, useEffect } from "react";
import Carousel from "react-gallery-carousel";

import { FiArrowLeft, FiUsers } from "react-icons/fi";
import {
  FaWarehouse,
  FaNetworkWired,
  FaMapMarkerAlt,
  FaLock,
  FaTools,
  FaCamera,
  FaCode,
  FaCheck,
  FaWindowClose,
  FaBirthdayCake,
  FaPhoneAlt,
  FaHistory,
  FaIdBadge,
  FaUser,
} from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useHistory } from "react-router-dom";
import moment from 'moment';
import api from "../services/api.js";

import styles from "../styles/pages/DepositoDetalhes.module.css";
import "react-gallery-carousel/dist/index.css";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

function DepositoDetalhes() {
  const history = useHistory();

  const [deposito, setDeposito] = useState([]);  

  useEffect(() => {
    async function getDadosDeposito() {
      const sigla_deposito = await localStorage.getItem(
        "@projetoreciclagem:sigla_deposito"
      );
      console.log(sigla_deposito);
      const response = await api.get(`/depositos/${sigla_deposito}`);
      setDeposito(response.data);
      
    }
    getDadosDeposito();
  }, []);
  
 
  if (!deposito.dados_geograficos) {
    return (
      <>
        <Navbar />
        <Loading />
        <Footer />
      </>
    );
  }
    
      //Percorrer todas as imagens que estão dentro do array para exibir no Carousel.
      const images = deposito.infraestrutura.fotos_deposito.interno.map((dep) => ({
        src: dep,
      })); 
     
  return (
    <>
      <Navbar />

      <div className={styles.containerPage}>
        <div className={styles.containerHeader}>
          <h1 className={styles.depName}>
            {deposito.sigla_dep} - {deposito.dados_geograficos.cidade}
          </h1>
          <button
            type="button"
            className={styles.backButton}
            onClick={history.goBack}
          >
            <FiArrowLeft size={44} color="#000" />
          </button>
        </div>

        <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}>
            <FaWarehouse
              size={40}
              color="#FFB905"
              className={styles.iconStyle}
            />
            <span style={{ "margin-left": "20px" }}>
              Detalhes sobre o depósito
            </span>
          </h2>
        </div>
        <hr className={styles.hrBorder} />

        <div className={styles.containerInfoDep}>
          <div className={styles.containerInfoDepLeft}>
            <div className={styles.InfoData}>
              <span className={styles.spanInfo}>Sigla depósito:</span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfo}>Sigla loja mãe:</span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfo}>Cidade:</span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfo}>UF: </span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfo}>Anexo a loja? </span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfo}>Fecha para almoço? </span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfo}>Cliente retira? </span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfo}>Área de CRP? </span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfo}>
                Área de logística reversa?
              </span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfo}>Área de TAT? </span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfo}>Postos que abastece: </span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfo}>
                Representantes que abastece:
              </span>
            </div>
          </div>
          <div className={styles.containerInfoDepRight}>
            <div className={styles.InfoData}>
              <span className={styles.spanInfoResponse}>
                {deposito.sigla_dep}
              </span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfoResponse}>
                {deposito.sigla_loja_mae}
              </span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfoResponse}>
                {deposito.dados_geograficos.cidade}
              </span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfoResponse}>
                {deposito.dados_geograficos.uf}
              </span>
            </div>
            <div className={styles.InfoData}>
              {deposito.anexo_loja === true ? (
                <span className={styles.simBadge}>SIM</span>
              ) : (
                <span className={styles.naoBadge}>NÃO</span>
              )}
            </div>
            <div className={styles.InfoData}>
              {deposito.fecha_almoco === true ? (
                <span className={styles.simBadge}>SIM</span>
              ) : (
                <span className={styles.naoBadge}>NÃO</span>
              )}
            </div>
            <div className={styles.InfoData}>
              {deposito.cliente_retira === true ? (
                <span className={styles.simBadge}>SIM</span>
              ) : (
                <span className={styles.naoBadge}>NÃO</span>
              )}
            </div>
            <div className={styles.InfoData}>
              {deposito.infraestrutura.area_servico.crp === true ? (
                <span className={styles.simBadge}>SIM</span>
              ) : (
                <span className={styles.naoBadge}>NÃO</span>
              )}
            </div>
            <div className={styles.InfoData}>
              {deposito.infraestrutura.area_servico.logistica_reversa ===
              true ? (
                <span className={styles.simBadge}>SIM</span>
              ) : (
                <span className={styles.naoBadge}>NÃO</span>
              )}
            </div>
            <div className={styles.InfoData}>
              {deposito.infraestrutura.area_servico.tat === true ? (
                <span className={styles.simBadge}>SIM</span>
              ) : (
                <span className={styles.naoBadge}>NÃO</span>
              )}
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfoResponse}>
                {deposito.pdvs.sigla_posto}
              </span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfoResponse}>
                {deposito.pdvs.sigla_rep}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}>
            <FiUsers size={40} color="#FFB905" className={styles.iconStyle} />
            <span style={{ "margin-left": "20px" }}>Lideranças</span>
          </h2>
        </div>
        <hr className={styles.hrBorder} />

        <div className={styles.containerChefes}>
          <div className={styles.containerChefeDep2}>
            <div className={styles.asideChefedep}>
              <img
                src={`${deposito.chefe_dep.foto_url}`}
                
                className={styles.imgNew}
                alt="Chefe do depósito"
              />
              <h2 className={styles.nameDep}>Chefe de depósito</h2>
            </div>
            <div className={styles.asideRight}>
              <hr className={styles.hrNew} />
              <div className={styles.containerInfo2}>
                <div className={styles.containerTextInfo2}>
                  <FaUser size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>
                      NOME DE GUERRA:
                    </span>
                    <span className={styles.textProfileRight}>{deposito.chefe_dep.nome_guerra}</span>
                  </div>
                </div>
                <div className={styles.containerTextInfo2}>
                  <GrContactInfo size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>
                      NOME COMPLETO:
                    </span>
                    <span className={styles.textProfileRight}>
                    {deposito.chefe_dep.nome_completo}
                    </span>
                  </div>
                </div>
                <div className={styles.containerTextInfo2}>
                  <FaIdBadge size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>
                      NÚMERO GERAL:
                    </span>
                    <span className={styles.textProfileRight}>
                      {deposito.chefe_dep.num_geral.substr(0,5)+ "-" + deposito.chefe_dep.num_geral.substr(5,6)}
                    </span>
                  </div>
                </div>
                <div className={styles.containerTextInfo2}>
                  <MdDateRange size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>
                      DATA DE ADMISSÃO:
                    </span>
                    <span className={styles.textProfileRight}>{moment(deposito.chefe_dep.data_admissao).format('L')}</span>
                  </div>
                </div>
                <div className={styles.containerTextInfo2}>
                  <FaBirthdayCake size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>
                      DATA DE NASCIMENTO:
                    </span>
                    <span className={styles.textProfileRight}>
                      {moment(deposito.chefe_dep.data_nascimento).format('L')}
                      </span>
                  </div>
                </div>
                <div className={styles.containerTextInfo2}>
                  <FaPhoneAlt size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>CONTATOS:</span>
                    <span className={styles.textProfileRight}>
                      (86) 9 9999-9999
                    </span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className={styles.containerChefeDep2}>
            <div className={styles.asideChefedep}>
              <img 
              src={`${deposito.gerente.foto_url}`} 
              className={styles.imgNew} 
              alt="Gerente"
               />
              <h2 className={styles.nameDep}>Gerente</h2>
            </div>
            <div className={styles.asideRight}>
              <hr className={styles.hrNew} />
              <div className={styles.containerInfo2}>
                <div className={styles.containerTextInfo2}>
                  <FaUser size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>
                      NOME DE GUERRA:
                    </span>
                    <span className={styles.textProfileRight}>
                      {deposito.gerente.nome_guerra}
                    </span>
                  </div>
                </div>
                <div className={styles.containerTextInfo2}>
                  <GrContactInfo size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>
                      NOME COMPLETO:
                    </span>
                    <span className={styles.textProfileRight}>
                       {deposito.gerente.nome_completo}
                    </span>
                  </div>
                </div>
                <div className={styles.containerTextInfo2}>
                  <FaIdBadge size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>
                      NÚMERO GERAL:
                    </span>
                    <span className={styles.textProfileRight}>
                    {deposito.gerente.num_geral.substr(0,5)+ "-" + deposito.gerente.num_geral.substr(5,6)}
                    </span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          {deposito.funcionario_num2 === null ? (
                <div className={styles.containerChefeDep2}>
                <div className={styles.asideChefedep}>
                  <img 
                  src={'/interrogacao.jpg'} 
                  className={styles.imgNew} 
                  alt="Funcionário não definido" 
                  />
                  <h2 className={styles.nameDep}>Não definido</h2>
                </div>
                <div className={styles.asideRight}>
                  <hr className={styles.hrNew} />
                  <div className={styles.containerInfo2}>
                    <div className={styles.containerTextInfo2}>
                      <FaUser size={22} color="#000" />
                      <div className={styles.containerTextInfo2}>
                        <span className={styles.textProfileLeft}>
                          NOME DE GUERRA:
                        </span>
                        <span className={styles.textProfileRight}>
                          -
                        </span>
                      </div>
                    </div>
                    <div className={styles.containerTextInfo2}>
                      <GrContactInfo size={22} color="#000" />
                      <div className={styles.containerTextInfo2}>
                        <span className={styles.textProfileLeft}>
                          NOME COMPLETO:
                        </span>
                        <span className={styles.textProfileRight}>
                          -
                        </span>
                      </div>
                    </div>
                    <div className={styles.containerTextInfo2}>
                      <FaIdBadge size={22} color="#000" />
                      <div className={styles.containerTextInfo2}>
                        <span className={styles.textProfileLeft}>
                          NÚMERO GERAL:
                        </span>
                        <span className={styles.textProfileRight}>-</span>
                      </div>
                    </div>
                    <div className={styles.containerTextInfo2}>
                      <MdDateRange size={22} color="#000" />
                      <div className={styles.containerTextInfo2}>
                        <span className={styles.textProfileLeft}>
                          DATA DE ADMISSÃO:
                        </span>
                        <span className={styles.textProfileRight}>-</span>
                      </div>
                    </div>
                    <div className={styles.containerTextInfo2}>
                      <FaBirthdayCake size={22} color="#000" />
                      <div className={styles.containerTextInfo2}>
                        <span className={styles.textProfileLeft}>
                          DATA DE NASCIMENTO:
                        </span>
                        <span className={styles.textProfileRight}>-</span>
                      </div>
                    </div>
                    <div className={styles.containerTextInfo2}>
                      <FaPhoneAlt size={22} color="#000" />
                      <div className={styles.containerTextInfo2}>
                        <span className={styles.textProfileLeft}>CONTATOS:</span>
                        <span className={styles.textProfileRight}>-</span>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              ) : (
                <div className={styles.containerChefeDep2}>
            <div className={styles.asideChefedep}>
              <img 
              src={`${deposito.funcionario_num2.foto_url}`} 
              className={styles.imgNew} 
              alt="Funcionário número 2" 
              />
              <h2 className={styles.nameDep}>Funcionário número 2</h2>
            </div>
            <div className={styles.asideRight}>
              <hr className={styles.hrNew} />
              <div className={styles.containerInfo2}>
                <div className={styles.containerTextInfo2}>
                  <FaUser size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>
                      NOME DE GUERRA:
                    </span>
                    <span className={styles.textProfileRight}>
                      {deposito.funcionario_num2.nome_guerra}
                    </span>
                  </div>
                </div>
                <div className={styles.containerTextInfo2}>
                  <GrContactInfo size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>
                      NOME COMPLETO:
                    </span>
                    <span className={styles.textProfileRight}>
                    {deposito.funcionario_num2.nome_completo}
                    </span>
                  </div>
                </div>
                <div className={styles.containerTextInfo2}>
                  <FaIdBadge size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>
                      NÚMERO GERAL:
                    </span>
                    <span className={styles.textProfileRight}>
                      {deposito.funcionario_num2.num_geral.substr(0,5)+ "-" + deposito.funcionario_num2.num_geral.substr(5,6)}
                    </span>
                  </div>
                </div>
                <div className={styles.containerTextInfo2}>
                  <MdDateRange size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>
                      DATA DE ADMISSÃO:
                    </span>
                    <span className={styles.textProfileRight}>
                      {moment(deposito.funcionario_num2.admissao).format('L')}
                    </span>
                  </div>
                </div>
                <div className={styles.containerTextInfo2}>
                  <FaBirthdayCake size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>
                      DATA DE NASCIMENTO:
                    </span>
                    <span className={styles.textProfileRight}>
                      {moment(deposito.funcionario_num2.data_nascimento).format('L')}
                    </span>
                  </div>
                </div>
                <div className={styles.containerTextInfo2}>
                  <FaPhoneAlt size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>CONTATOS:</span>
                    <span className={styles.textProfileRight}>124123</span>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
              )}
          
        </div>

        <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}>
            <FaCode size={40} color="#FFB905" className={styles.iconStyle} />
            <span style={{ "margin-left": "20px" }}>Sistemas implantados</span>
          </h2>
        </div>
        <hr className={styles.hrBorder} />

        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>Venda Remota</th>
              <th>Control Mobile</th>
              <th>WMS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              {deposito.sistemas.venda_remota === true ? (
                <FaCheck size={30} color="#02bd02" />
              ) : (
                <FaWindowClose size={30} color="#e01010" />
              )}
                
              </td>
              <td>
              {deposito.sistemas.control_mobile === true ? (
                <FaCheck size={30} color="#02bd02" />
              ) : (
                <FaWindowClose size={30} color="#e01010" />
              )}
              </td>
              <td>
              {deposito.sistemas.wms === true ? (
                <FaCheck size={30} color="#02bd02" />
              ) : (
                <FaWindowClose size={30} color="#e01010" />
              )}
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}>
            <FaCamera size={40} color="#FFB905" className={styles.iconStyle} />
            <span style={{ "margin-left": "20px" }}>Imagens</span>
          </h2>
        </div>
        <hr className={styles.hrBorder} />

         <div className={styles.containerCarousel}>
          <Carousel
            images={images}
            style={{ height: "85vh", width: "100vh" }}
          />
        </div> 

        <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}>
            <FaLock size={40} color="#FFB905" className={styles.iconStyle} />
            <span style={{ "margin-left": "20px" }}>Itens de segurança</span>
          </h2>
        </div>
        <hr className={styles.hrBorder} />

        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>CFTV</th>
              <th>Vigilante</th>
              <th>Cachorro</th>
              <th>Cerca elétrica</th>
              <th>Botão de pânico</th>
              <th>Alarme</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  {deposito.infraestrutura.metodos_seguranca.cftv === true ? (
                    <FaCheck size={30} color="#02bd02" />
                  ) : (
                    <FaWindowClose size={30} color="#e01010" />
                  )}
              </td>
              <td>
              {deposito.infraestrutura.metodos_seguranca.vigilante === true ? (
                    <FaCheck size={30} color="#02bd02" />
                  ) : (
                    <FaWindowClose size={30} color="#e01010" />
                  )}
              </td>
              <td>
              {deposito.infraestrutura.metodos_seguranca.seg_canina === true ? (
                    <FaCheck size={30} color="#02bd02" />
                  ) : (
                    <FaWindowClose size={30} color="#e01010" />
                  )}
              </td>
              <td>
              {deposito.infraestrutura.metodos_seguranca.cerca_eletrica === true ? (
                    <FaCheck size={30} color="#02bd02" />
                  ) : (
                    <FaWindowClose size={30} color="#e01010" />
                  )}
              </td>
              <td>
              {deposito.infraestrutura.metodos_seguranca.botao_panico === true ? (
                    <FaCheck size={30} color="#02bd02" />
                  ) : (
                    <FaWindowClose size={30} color="#e01010" />
                  )}
              </td>
              <td>
              {deposito.infraestrutura.metodos_seguranca.alarme === true ? (
                    <FaCheck size={30} color="#02bd02" />
                  ) : (
                    <FaWindowClose size={30} color="#e01010" />
                  )}
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}>
            <FaTools size={40} color="#FFB905" className={styles.iconStyle} />
            <span style={{ "margin-left": "20px" }}>
              Ferramentas e equipamentos
            </span>
          </h2>
        </div>
        <hr className={styles.hrBorder} />

        {/*  <table className={styles.tabela}>
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
  */}

        <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}>
            <FaMapMarkerAlt
              size={40}
              color="#FFB905"
              className={styles.iconStyle}
            />
            <span style={{ "margin-left": "20px" }}>Localização</span>
          </h2>
        </div>
        <hr className={styles.hrBorder} />

        <MapContainer
          center={[`${deposito.dados_geograficos.location.latitude}`, `${deposito.dados_geograficos.location.longitude}`]}
          zoom={13}
          style={{
            width: "80%",
            height: "500px",
            margin: "auto",
            "margin-top": "15px",
          }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[`${deposito.dados_geograficos.location.latitude}`, `${deposito.dados_geograficos.location.longitude}`]}>
            <Popup>
              <span>Aqui está o depósito de Oeiras!</span>
            </Popup>
          </Marker>
        </MapContainer>

        <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}>
            <FaNetworkWired
              size={40}
              color="#FFB905"
              className={styles.iconStyle}
            />
            <span style={{ "margin-left": "20px" }}>
              Organograma do depósito
            </span>
          </h2>
        </div>
        <hr className={styles.hrBorder} />

        {deposito.organograma.status_organograma === 'VALIDADO' ? (
                <span className={styles.statusValidacao}>
             
                STATUS: <span className={styles.isValidado}>VALIDADO</span>
              </span>
              ) : (
                <span className={styles.statusValidacao}>
             
              STATUS: <span className={styles.isNotValidado}>AGUARDANDO</span>
            </span>
              )}
             
            <span className={styles.lastUpdate}>
              Última atualização: {moment(deposito.organograma.ultima_atualizacao).format('L')}
            </span>
        <img
          
          src={`${deposito.organograma.url_organograma}`}
          className={styles.organogramaEstilo}
          alt="organograma do depósito"
        />

      </div>
      <Footer />
    </>
  );
}

export default DepositoDetalhes;
