const mapper = require("automapper-js");
const { UsuarioDto } = require("../dtos");

class UsuarioController {
  constructor({ UsuarioService }) {
    this._usuarioService = UsuarioService;
  }

  async getAll(req, res) {
    let usuarios = await this._usuarioService.getAll();
    usuarios = usuarios.map((usuario) => mapper(UsuarioDto, usuario));
    return res.send({
      error: false,
      message: usuarios,
    });
  }
}

module.exports = UsuarioController;
