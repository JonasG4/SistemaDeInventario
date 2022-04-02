const BaseBusiness = require("./base.business");
const { Usuario } = require("./models");

class UsuarioBusiness extends BaseBusiness {
  constructor({ UsuarioRepository }) {
    super(UsuarioRepository, Usuario);
  }
}

module.exports = UsuarioBusiness;
