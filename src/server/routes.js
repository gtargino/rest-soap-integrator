const { Router } = require('express');
const SOAPController = require('../client/Controllers/SOAPController');

const routes = Router();
routes.get('/correio', SOAPController.cep);

module.exports = routes;