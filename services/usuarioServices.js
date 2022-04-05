const BaseService = require("./baseServices");

class UsuarioService extends BaseService {
  constructor({ UsuarioBusiness }) {
    super(UsuarioBusiness);
  }
}

module.exports = UsuarioService;
