const mapper = require("automapper-js");
const { CompraDto } = require("../dtos");

class CompraController {
  constructor({ CompraService }) {
    this._compraService = CompraService;
  }

  async getCompras(req,res) {
    let compras = await this._compraService.getCompras();
    return res.send({
      error: false,
      message: compras
    });
  }

  async getCompraById(req,res) {
    let { id } = req.params;
    let compra = await this._compraService.getCompraById(id);
    if(!compra) {
      return res.status(404).send({
        error: true,
        message: `Compra con id: ${id} no existe.`,
      });
    }
    return res.send({
      error: false,
      message: compra
    });
  } 

  async crearCompra(req, res){
    try {      
      const { body }  = req;
      const createBuy = await this._compraService.createBuy(body);
      if(createBuy) {
        return res.status(201).send({
          error: false,
          message: "Registro creado con exito!",
          buy: createBuy
        })
      }
    } catch (error) {
      res.status(401).send(error)
    }
  }

  async updateCompra(req, res){
    const { body } = req;
    const { id } = req.params;
    const response = await this._compraService.updateCompra(id, body);
    if(!response) {
      return res.status(404).send({
        message: "Registro no encontrado",
      });
    }
    return res.status(206).send({
      error: false,
      message: "Registro actualizado con exito!",
      material: response
    });
  }

  async deleteCompra(req, res){
    const {id} = req.params;
    await this._compraService.deleteCompra(id);
    return res.status(206).send({
      error: false,
      message: "Se ha eliminado el registro con exito!",
      payload: id
    })
  }
}

module.exports = CompraController;