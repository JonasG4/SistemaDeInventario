const mapper = require("automapper-js");
const { UsuarioDto } = require("../dtos");

class UsuarioController {
  constructor({ UsuarioService }) {
    this._usuarioService = UsuarioService;
  }

  async getUsuarios(req, res) {
    let usuarios = await this._usuarioService.getAll();
    usuarios = usuarios.map((usuario) => mapper(UsuarioDto, usuario));
    return res.send({
      error: false,
      message: usuarios,
    });
  }

  async getUsuario(req, res) {
    let { id } = req.params;
    let usuario = await this._usuarioService.get(id);
    if (!usuario) {
      return res.status(404).send();
    }

    usuario = mapper(UsuarioDto, usuario);
    return res.send({
      error: false,
      usuario: usuario,
    });
  }

  async crearUsuario(req, res){
    const { body } = req;

    const crearUsuario = await this._usuarioService.create(body);
    return res.status(201).send({
      error: false,
      message: "Usuario creado con exito!"
    })
  }

  async modificarUsuario(req, res){
    const { body } = req;
    const { id } = req.params;

    await this._usuarioService.update(id, body);
    return res.status(204).send({
      error: false,
      message: "Usuario actualizado el usuario con exito!"
    })
  }

  async borrarUsuario(req, res){
    const {id} = req.params;

    await this._usuarioService.delete(id);
    return res.status(206).send({
      error: false,
      message: "Se ha eliminado el usuario con exito!"
    })
  }
}

module.exports = UsuarioController;
