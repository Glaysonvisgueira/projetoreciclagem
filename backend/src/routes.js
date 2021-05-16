const { Router } = require('express');

const DepositoController = require('./controllers/DepositoController');

const routes = Router();

routes.get('/depositos', DepositoController.index);
routes.post('/cadastrar-deposito', DepositoController.store);

module.exports = routes;