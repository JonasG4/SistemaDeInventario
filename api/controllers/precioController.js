const mapper = require('automapper-js');
const { PrecioDto } = require('../dtos');

class PrecioController {
  constructor( { PrecioService } ) {
    this._precioService = PrecioService;
  }

  async getPrecios(req,res) {
    let precios = await this._precioService.getPrecios();
    return res.send({
      error: false,
      message: precios 
    })
  }

  async getPrecio(req,res) {
    let {  id } = req.params;
    let precio = await this._precioService.get(id);
    if(!precio) {
      return res.status(400).send();
    }

    precio = mapper(PrecioDto, precio);
    return res.send({
      error: false,
      precio: precio
    })
  }

  async crearPrecio(req,res) {
    const { body } = req;
    const crearPrecioProducto = await this._precioService.create(body);
    return res.status(201).send({
      error: false,
      message: "Precio agregado al producto con éxito"
    }) 
  }

  async modificarPrecio(req, res){
    const { body } = req;
    const { id } = req.params;
    let response = await this._precioService.updatePrecio(id, body);
    if (!response) {
      return res.status(404).send({
        message: "Precio no encontrado",
      });
    }

    return res.status(208).send({
      error: false,
      message: "Precio actualizado el usuario con exito!",
    });
  }

  async borrarPrecio(req, res){
    const {id} = req.params;

    await this._precioService.delete(id);
    return res.status(206).send({
      error: false,
      message: "Se ha eliminado el precio del producto!"
    })
  }

}

module.exports = PrecioController;

