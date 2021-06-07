const Deposito = require('../models/Deposito');
const axios = require('axios');

module.exports = {
    async index(request, response){
        const depositos = await Deposito.find().sort({ sigla_dep: 1 });
        return response.json(depositos);
    } 
}