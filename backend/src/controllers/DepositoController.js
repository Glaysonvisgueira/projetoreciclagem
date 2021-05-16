const Deposito = require('../models/Deposito');
const axios = require('axios');

module.exports = {
    async index(request, response){
        const depositos = await Deposito.find();
        return response.json(depositos);
    },
    async store(request, response) {

        latitude = -4.2320751;
        longitude = -44.7778116;
        
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
          };
        
        var deposito_obj = {
            "sigla_dep": "BAC",
            "sigla_loja_mae": "BAC",
            "perfil": "GRANDE",
            "gerente": {
                "nome_completo": "ERISVALDO SOUSA LOBO",
                "nome_guerra": "ERISVALDO",
                "num_geral": "130370",
                "foto_url": "",
            },
            "chefe_dep": {
                "nome_completo": "ADAUTO PEREIRA DOS SANTOS",
                "nome_guerra": "ADAUTO",
                "num_geral": "748986",
                'data_admissao': "04/08/2014", 
                "data_nascimento": "07/12/1983",
                "historico_empresa": "Aux. de depósito (BAC) e Conferente (BAC)",
                "foto_url": "",
                "contatos": {
                    "corporativo": "",
                    "proprio": "99981290765",
                    "proprio2": "",
                }
            },
            "funcionario_num2": {
                "nome_completo": "ELISVANDO COSTA DA CONCEIÇÃO",
                "nome_guerra": "ELISVANDO",
                "num_geral": "721476",
                "data_admissao": "02/10/2013", 
                "data_nascimento": "22/11/1978",
                "historico_empresa": "CARREGAMENTO E ARRUMAÇÃO, RECEBIMENTO DE MERCADORIA DO TDC, CARREGAMENTO DE CARROS DA REGIÃO.",
                "foto_url": "",
                "contatos": {
                    "corporativo": "",
                    "proprio": "99981820713",
                    "proprio2": "",
                }
            },
            "qtd_funcionarios": 22,
            "organograma": {
                "url_organograma": "",
                "status_organograma": "",
                "ultima_atualizacao" : ""
            },
            "sistemas": {
                "venda_remota": true,
                "control_mobile": true,
                "wms": false,
                },
            "pdvs": {
                "sigla_posto": [""],
                "sigla_rep": [""]
            },
            "fecha_almoco": true,
            "cliente_retira": true,
            "anexo_loja": true,
            "infraestrutura": {
                "fotos_deposito": {
                    "interno": [""],
                    "externo": [""]
                },
                "area_servico": {
                    "crp": false,
                    "logistica_reversa": false,
                    "tat": false,
                },
                "metodos_seguranca": {
                    "cftv": true,
                    "vigilante": true,
                    "seg_canina": false,
                    "cerca_eletrica": false,
                    "botao_panico": false,
                    "alarme": false,
                },
                "equipamentos": {
                    "porta_pallet": true,
                    "pallet": true,
                    "rack_movimentacao": false,
                    "carrinho_plataforma": true,
                    "balanca_digital": false,
                    "balanca": false,
                    "esteira_flexivel": false,
                    "empilhadeira_gas": true,
                    "empilhadeira_eletrica": false,
                    "transpaleteira_manual": true,
                    "transpaleteira_eletrica": false,
                    "escada_plataforma": true,
                    "carrinho_armazenagem": false,
                    "caixa_azul": true,
                    "movimentador_vidro": false,
                    "armazenador_vidro": true,
                    "gaiola_portateis": true,
                }
            },
            "dados_geograficos": {
                "cidade": "BACABAL",
                "uf": "MA",
                "loc_exata": true,
                location
            }
        }
        
        const deposito = await Deposito.create({
            "sigla_dep": deposito_obj.sigla_dep,
            "sigla_loja_mae": deposito_obj.sigla_loja_mae,
            "perfil": deposito_obj.perfil,
            "gerente": {
                "nome_completo": deposito_obj.gerente.nome_completo,
                "nome_guerra": deposito_obj.gerente.nome_guerra,
                "num_geral": deposito_obj.gerente.num_geral,
                "foto_url": "",
            },
            "chefe_dep": {
                "nome_completo": deposito_obj.chefe_dep.nome_completo,
                "nome_guerra": deposito_obj.chefe_dep.nome_guerra,
                "num_geral": deposito_obj.chefe_dep.num_geral,
                'data_admissao': new Date(2018, 02, 25), 
                "data_nascimento": new Date(2018, 02, 25),
                "historico_empresa": deposito_obj.chefe_dep.historico_empresa,
                "foto_url": "",
                "contatos": {
                    "corporativo": "",
                    "proprio": deposito_obj.chefe_dep.contatos.proprio,
                    "proprio2": "",
                }
            },
            "funcionario_num2": {
                "nome_completo": deposito_obj.funcionario_num2.nome_completo,
                "nome_guerra": deposito_obj.funcionario_num2.nome_guerra,
                "num_geral": deposito_obj.funcionario_num2.num_geral,
                "data_admissao": new Date(2018, 02, 25), 
                "data_nascimento": new Date(2018, 02, 25),
                "historico_empresa": deposito_obj.funcionario_num2.historico_empresa,
                "foto_url": "",
                "contatos": {
                    "corporativo": "",
                    "proprio": deposito_obj.funcionario_num2.contatos.proprio,
                    "proprio2": "",
                }
            },
            "qtd_funcionarios": deposito_obj.qtd_funcionarios,
            "organograma": {
                "url_organograma": "",
                "status_organograma": "",
                "ultima_atualizacao" : ""
            },
            "sistemas": {
                "venda_remota": true,
                "control_mobile": true,
                "wms": false,
                },
            "pdvs": {
                "sigla_posto": [""],
                "sigla_rep": [""]
            },
            "fecha_almoco": true,
            "cliente_retira": true,
            "anexo_loja": true,
            "infraestrutura": {
                "fotos_deposito": {
                    "interno": [""],
                    "externo": [""]
                },
                "area_servico": {
                    "crp": false,
                    "logistica_reversa": false,
                    "tat": false,
                },
                "metodos_seguranca": {
                    "cftv": true,
                    "vigilante": true,
                    "seg_canina": false,
                    "cerca_eletrica": false,
                    "botao_panico": false,
                    "alarme": false,
                },
                "equipamentos": {
                    "porta_pallet": true,
                    "pallet": true,
                    "rack_movimentacao": false,
                    "carrinho_plataforma": true,
                    "balanca_digital": false,
                    "balanca": false,
                    "esteira_flexivel": false,
                    "empilhadeira_gas": true,
                    "empilhadeira_eletrica": false,
                    "transpaleteira_manual": true,
                    "transpaleteira_eletrica": false,
                    "escada_plataforma": true,
                    "carrinho_armazenagem": false,
                    "caixa_azul": true,
                    "movimentador_vidro": false,
                    "armazenador_vidro": true,
                    "gaiola_portateis": true,
                }
            },
            "dados_geograficos": {
                "cidade": "BACABAL",
                "uf": "MA",
                "loc_exata": true,
                location
            }
        });  

        return response.json(deposito);
    } 
}