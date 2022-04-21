const mapper = require("automapper-js");
const { CategoriaDto } = require("../dtos");

class CategoriaController {
  constructor({ CategoriaService }) {
    this._categoriaService = CategoriaService;
  }

  async getCategorias(req, res) {
    let categorias = await this._categoriaService.getAll();
    categorias = categorias.map((categoria) => mapper(CategoriaDto, categoria));
    return res.send({
      error: false,
      message: categorias,
    });
  }

  async getCategoria(req, res) {
    let { id } = req.params;
    console.log(id);
    let categoria = await this._categoriaService.getCategoriaById(id);
    if (!categoria) {
      return res.status(404).send();
    }

    categoria = mapper(CategoriaDto, categoria);
    return res.send({
      error: false,
      categoria: categoria,
    });
  }

  async crearCategoria(req, res){
    // console.log("aaaaaaaaa",req);
    const { body }  = req;
    const crearCategoria = await this._categoriaService.create(body);
    return res.status(201).send({
      error: false,
      message: "Categoria creado con exito!"
    })
  }

  async modificarCategoria(req, res){
    const { body } = req;
    const { id } = req.params;
    await this._categoriaService.updateCategoria(id, body);
    return res.status(204).send({
      error: false,
      message: "Categoria actualizada con exito!"
    })
  }

  async borrarCategoria(req, res){
    const {id} = req.params;

    await this._categoriaService.deleteCategoria(id);
    return res.status(206).send({
      error: false,
      message: "Se ha eliminado la categoria con exito!"
    })
  }
}

module.exports = CategoriaController;
