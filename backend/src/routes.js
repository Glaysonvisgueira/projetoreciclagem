const { Router } = require('express');

const DepositoController = require('./controllers/DepositoController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/depositos', DepositoController.index);

routes.get('/depositos/:sigla_deposito', SearchController.encontrarDeposito);


module.exports = routes;