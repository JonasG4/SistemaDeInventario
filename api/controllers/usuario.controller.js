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

  async get(req, res){
    let { params } = req.body;
    let usuario = await this._usuarioService.get()
  }
}

module.exports = UsuarioController;
