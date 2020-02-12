const soap = require('soap');
//const url = 'http://localhost:8080/test?wsdl';

module.exports = {
  cep(req, res) {
    const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';
    
    soap.createClient(url, (err, client) => {
      client.consultaCEP(req.query, (err, response) => {
        return res.json(response);
      });
    });
  }
};



