import React, { useState, useEffect } from "react";
import Carousel from "react-gallery-carousel";
import PageProgress from 'react-page-progress'

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
  FaIdBadge,
  FaUser,
} from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useHistory } from "react-router-dom";
import moment from "moment";
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
         <>
                <Navbar />
                <Loading />
                <Footer />
            </>
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
      <PageProgress color={'#FFB905'} height={5}/>
      <div className={styles.containerPage}>
        <div className={styles.containerHeader}>
          <h1 className={styles.depName}>
            {deposito.sigla_dep} - {deposito.dados_geograficos.cidade} | PERFIL:{" "}
            {deposito.perfil}
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
                {deposito.pdvs.sigla_posto.map((posto) => (
                  <span className={styles.siglaAbastecido}>{posto}</span>
                ))}
              </span>
            </div>
            <div className={styles.InfoData}>
              <span className={styles.spanInfoResponse}>
                {deposito.pdvs.sigla_rep.map((rep) => (
                  <span className={styles.siglaAbastecido}>{rep}</span>
                ))}
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
                    <span className={styles.textProfileRight}>
                      {deposito.chefe_dep.nome_guerra}
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
                      {deposito.chefe_dep.num_geral}
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
                      {moment(deposito.chefe_dep.data_admissao).format("L")}
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
                      {moment(deposito.chefe_dep.data_nascimento).format("L")}
                    </span>
                  </div>
                </div>
                <div className={styles.containerTextInfo2}>
                  <FaPhoneAlt size={22} color="#000" />
                  <div className={styles.containerTextInfo2}>
                    <span className={styles.textProfileLeft}>CONTATO:</span>

                    {deposito.chefe_dep.contatos.corporativo !== null ? (
                      <span className={styles.textProfileRight}>
                        {"(" +
                          deposito.chefe_dep.contatos.corporativo.substr(0, 2) +
                          ") " +
                          deposito.chefe_dep.contatos.corporativo.substr(2, 1) +
                          " " +
                          deposito.chefe_dep.contatos.corporativo.substr(3, 4) +
                          "-" +
                          deposito.chefe_dep.contatos.corporativo.substr(4, 4)}
                      </span>
                    ) : (
                      <span className={styles.textProfileRight}>-</span>
                    )}
                    {/*  <span className={styles.textProfileRight}>
                      (86) 9 9999-9999
                    </span> */}
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
                      {deposito.gerente.num_geral}
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
                  src={"/interrogacao.jpg"}
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
                      <span className={styles.textProfileRight}>-</span>
                    </div>
                  </div>
                  <div className={styles.containerTextInfo2}>
                    <GrContactInfo size={22} color="#000" />
                    <div className={styles.containerTextInfo2}>
                      <span className={styles.textProfileLeft}>
                        NOME COMPLETO:
                      </span>
                      <span className={styles.textProfileRight}>-</span>
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
                      <span className={styles.textProfileLeft}>CONTATO:</span>
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
                        {deposito.funcionario_num2.num_geral}
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
                        {moment(deposito.funcionario_num2.admissao).format("L")}
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
                        {moment(
                          deposito.funcionario_num2.data_nascimento
                        ).format("L")}
                      </span>
                    </div>
                  </div>
                  <div className={styles.containerTextInfo2}>
                    <FaPhoneAlt size={22} color="#000" />
                    <div className={styles.containerTextInfo2}>
                      <span className={styles.textProfileLeft}>CONTATO:</span>
                      {deposito.funcionario_num2.contatos.corporativo !==
                      null ? (
                        <span className={styles.textProfileRight}>
                          {"(" +
                            deposito.funcionario_num2.contatos.corporativo.substr(
                              0,
                              2
                            ) +
                            ") " +
                            deposito.funcionario_num2.contatos.corporativo.substr(
                              2,
                              1
                            ) +
                            " " +
                            deposito.funcionario_num2.contatos.corporativo.substr(
                              3,
                              4
                            ) +
                            "-" +
                            deposito.funcionario_num2.contatos.corporativo.substr(
                              4,
                              4
                            )}
                        </span>
                      ) : (
                        <span className={styles.textProfileRight}>-</span>
                      )}
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
        <div className={styles.containerEquipamentos}>
          <div className={styles.gridEquipamentos}>
            {deposito.sistemas.venda_remota === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>VENDA REMOTA</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>VENDA REMOTA</p>
                </div>
              </div>
            )}

            {deposito.sistemas.control_mobile === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>CONTROL MOBILE</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>CONTROL MOBILE</p>
                </div>
              </div>
            )}

            {deposito.sistemas.wms === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>WMS</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>WMS</p>
                </div>
              </div>
            )}
          </div>
        </div>

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
        <div className={styles.containerEquipamentos}>
          <div className={styles.gridEquipamentos}>
            {deposito.infraestrutura.metodos_seguranca.cftv === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>CFTV</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>CFTV</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.metodos_seguranca.vigilante === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>VIGILANTE</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>VIGILANTE</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.metodos_seguranca.seg_canina === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>SEGURANÇA CANINA</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>SEGURANÇA CANINA</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.metodos_seguranca.cerca_eletrica ===
            true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>CERCA ELÉTRICA</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>CERCA ELÉTRICA</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.metodos_seguranca.botao_panico === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>BOTÃO DE PÂNICO</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>BOTÃO DE PÂNICO</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.metodos_seguranca.alarme === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>ALARME</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>ALARME</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.containerSubTitulo}>
          <h2 className={styles.subTitulo}>
            <FaTools size={40} color="#FFB905" className={styles.iconStyle} />
            <span style={{ "margin-left": "20px" }}>
              Ferramentas e equipamentos
            </span>
          </h2>
        </div>
        <hr className={styles.hrBorder} />
        <div className={styles.containerEquipamentos}>
          <div className={styles.gridEquipamentos}>
            {deposito.infraestrutura.equipamentos.porta_pallet === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>PORTA PALLET</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>PORTA PALLET</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.pallet === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>PALLET</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>PALLET</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.rack_movimentacao === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>RACK DE MOVIMENTAÇÃO</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>RACK DE MOVIMENTAÇÃO</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.carrinho_plataforma ===
            true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>CARRINHO DE PLATAFORMA</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>CARRINHO DE PLATAFORMA</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.balanca_digital === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>BALANÇA DIGITAL</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>BALANÇA DIGITAL</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.balanca === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>BALANÇA</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>BALANÇA</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.esteira_flexivel === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>ESTEIRA FLEXÍVEL</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>ESTEIRA FLEXÍVEL</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.empilhadeira_gas === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>EMPILHADEIRA A GÁS</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>EMPILHADEIRA A GÁS</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.empilhadeira_eletrica ===
            true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>EMPILHADEIRA A ELÉTRICA</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>EMPILHADEIRA A ELÉTRICA</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.transpaleteira_manual ===
            true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>TRANSPALETEIRA MANUAL</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>TRANSPALETEIRA MANUAL</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.transpaleteira_eletrica ===
            true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>TRANSPALETEIRA ELÉTRICA</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>TRANSPALETEIRA ELÉTRICA</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.escada_plataforma === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>ESCADA DE PLATAFORMA</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>ESCADA DE PLATAFORMA</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.carrinho_armazenagem ===
            true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>CARRINHO DE ARMAZENAGEM</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>CARRINHO DE ARMAZENAGEM</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.caixa_azul === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>CAIXA AZUL</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>CAIXA AZUL</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.movimentador_vidro ===
            true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>MOVIMENTADOR DE TAMPO/VIDRO</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>MOVIMENTADOR DE TAMPO/VIDRO</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.armazenador_vidro === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>ARMAZENADOR DE TAMPO/VIDRO</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>ARMAZENADOR DE TAMPO/VIDRO</p>
                </div>
              </div>
            )}

            {deposito.infraestrutura.equipamentos.gaiola_portateis === true ? (
              <div className={styles.cardEquipamento}>
                <FaCheck
                  size={60}
                  color="#02bd02"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>GAIOLA DE PORTÁTEIS</p>
                </div>
              </div>
            ) : (
              <div className={styles.cardEquipamento}>
                <FaWindowClose
                  size={60}
                  color="#e01010"
                  style={{ "margin-left": "20px" }}
                />
                <div className={styles.itemEquipamento}>
                  <p>GAIOLA DE PORTÁTEIS</p>
                </div>
              </div>
            )}
          </div>
        </div>

       

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
          center={[
            `${deposito.dados_geograficos.location.latitude}`,
            `${deposito.dados_geograficos.location.longitude}`,
          ]}
          zoom={13}
          style={{
            width: "80%",
            height: "500px",
            margin: "auto",
            'border-radius': '14px',
            "margin-top": "15px",
            'zIndex': 0
          }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[
              `${deposito.dados_geograficos.location.latitude}`,
              `${deposito.dados_geograficos.location.longitude}`,
            ]}
          >
            <Popup>
              <span>Aqui está o depósito de {deposito.sigla_dep}!</span>
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

        {deposito.organograma.status_organograma === "VALIDADO" ? (
          <span className={styles.statusValidacao}>
            STATUS: <span className={styles.isValidado}>VALIDADO</span>
          </span>
        ) : (
          <span className={styles.statusValidacao}>
            STATUS: <span className={styles.isNotValidado}>AGUARDANDO</span>
          </span>
        )}

        <span className={styles.lastUpdate}>
          Última atualização:{" "}
          {moment(deposito.organograma.ultima_atualizacao).format("L")}
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
