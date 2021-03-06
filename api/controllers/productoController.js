const mapper = require('automapper-js');
const { ProductoDto } = require('../dtos');

class ProductoController {
  constructor( { ProductoService }) {
    this._productoService = ProductoService;
  }

  async getProductos(req,res) {
    let productos = await this._productoService.getProductos();
    return res.send({
      error: false,
      message: productos
    });
  }

  async getProducto(req,res) {
    let { id } = req.params;
    let producto = await this._productoService.getProducto(id)
    if(!producto) {
      return res.status(404).send();
    }
    return res.send({
      error: false,
      producto: producto
    })
  }

  async crearProducto(req, res){
    const { body }  = req;
    const crearProducto = await this._productoService.create(body);
    return res.status(201).send({
      error: false,
      message: "Producto creado con exito!"
    })
  }

  async modificarProducto(req, res){
    const { body } = req;
    const { id } = req.params;
    console.log(body)
    await this._productoService.updateProducto(id, body);
    return res.status(204).send({
      error: false,
      message: "Producto actualizado con exito!"
    })
  }

  async borrarProducto(req, res){
    const {id} = req.params;

    await this._productoService.deleteProducto(id);
    return res.status(206).send({
      error: false,
      message: "Se ha eliminado el producto con exito!"
    })
  }
}

module.exports = ProductoController;

