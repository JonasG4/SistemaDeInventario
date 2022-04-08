const mapper = require("automapper-js");
const { CategoriaDto } = require("../dtos");

class CategoriaController {
  constructor({ CategoriaService }) {
    this._categoriaService = CategoriaService;
  }

  async getCategorias(req, res) {
    let categorias = await this._categoriaService.getAll();
    categorias = usuarios.map((categoria) => mapper(CategoriaDto, categoria));
    return res.send({
      error: false,
      message: categorias,
    });
  }

  async getCategoria(req, res) {
    let { id } = req.params;
    let usuario = await this._categoriaService.get(id);
    if (!usuario) {
      return res.status(404).send();
    }

    usuario = mapper(UsuarioDto, usuario);
    return res.send({
      error: false,
      usuario: usuario,
    });
  }

  async crearCategoria(req, res){
    // console.log("aaaaaaaaa",req);
    const { body }  = req;

    const crearUsuario = await this._categoriaService.create(body);
    return res.status(201).send({
      error: false,
      message: "Categoria creado con exito!"
    })
  }

  async modificarCategoria(req, res){
    const { body } = req;
    const { id } = req.params;
    await this._categoriaService.update(id, body);
    return res.status(204).send({
      error: false,
      message: "Categoria actualizada con exito!"
    })
  }

  async borrarCategoria(req, res){
    const {id} = req.params;

    await this._categoriaService.delete(id);
    return res.status(206).send({
      error: false,
      message: "Se ha eliminado la categoria con exito!"
    })
  }
}

module.exports = CategoriaController;
