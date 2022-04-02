const BaseService = require("./base.service");

class UsuarioService extends BaseService {
  constructor({ UsuarioBusiness }) {
    super(UsuarioBusiness);
  }
}

module.exports = UsuarioService;
