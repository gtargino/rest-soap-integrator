const soap = require('soap');

module.exports = {
  soapWS(req, res) {
    const { method, wsdl, soap_parameters: sp } = req.body;

    if (!method||!wsdl||!sp) {
      return res.status(400).json({
        error: `Invalid JSON body - 'method', 'wsdl' and 'soap_parameters' properties are required`
      });
    }

    soap.createClient(wsdl, (err, client) => {
      if (err) return res.status(422).json({ error: `${err}` });
      try {
        client[method](sp, (err, response) => {
          if (err) return res.status(400).json({ error: `${err}` });
          return res.json(response);
        });
      } catch(e) {
        return res.status(400).json({
          error: `${e}`, tip: `check that method '${method}' is correct`
        });
      }
    });
  }
};
