const Deposito = require('../models/Deposito');
const axios = require('axios');

module.exports = {
    async encontrarDeposito(request, response){
        sigla_deposito = request.params.sigla_deposito;
        const deposito = await Deposito.findOne({
            sigla_dep: sigla_deposito            
        });
        return response.json(deposito);
    }, 
}