const mapper = require("automapper-js");
const { UsuarioDto } = require("../dtos");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UsuarioController {
  constructor({ UsuarioService, config }) {
    this._usuarioService = UsuarioService;
    this._config = config;
  }

  async getUsuarios(req, res) {
    let usuarios = await this._usuarioService.getAllUsuarios();
    return res.status(200).send({
      error: false,
      message: usuarios,
    });
  }

  async getUsuario(req, res) {
    let { id } = req.params;
    let usuario = await this._usuarioService.getUsuarioById(id);
    if (!usuario) {
      return res.status(404).send({
        error: true,
        message: `Usuario con id: ${id} no existe.`,
      });
    }
    return res.send({
      error: false,
      usuario: usuario,
    });
  }

  async createUsuario(req, res) {
    const { body } = req;

    body.password = bcrypt.hashSync(body.password, 10);

    await this._usuarioService
      .createUsuario(body)
      .then((usuario) => {
        return res.status(201).send({
          error: false,
          message: `Se ha creado el usuario: ${
            usuario.nombre + " " + usuario.apellido
          }!`,
          usuario: usuario
        });
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  }

  async updateUsuario(req, res) {
    const { body } = req;
    const { id } = req.params;
    const response = await this._usuarioService.updateUsuario(id, body);

    console.log(response[1].dataValues);
    //Not found
    if (!response) {
      return res.status(404).send({
        message: "Usuario no encontrado",
      });
    }

    return res.status(208).send({
      error: false,
      message: "Usuario actualizado el usuario con exito!",
      usuario: response[1].dataValues
      
    });
  }

  async deleteUsuario(req, res) {
    const { id } = req.params;

    await this._usuarioService.deleteUsuario(id);
    return res.status(206).send({
      error: false,
      message: "Se ha eliminado el usuario con exito!",
      payload: id
    });
  }
}

module.exports = UsuarioController;
