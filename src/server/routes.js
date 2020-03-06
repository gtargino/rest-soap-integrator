const { Router } = require('express');
const SOAPController = require('../client/app/controllers/SOAPController');

const routes = Router();
routes.post('/soap', SOAPController.soapWS);

module.exports = routes;
