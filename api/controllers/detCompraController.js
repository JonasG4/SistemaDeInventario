const mapper = require("automapper-js");
const { DetCompraDto } = require("../dtos");

class DetCompraController {
  constructor({ DetCompraService }) {
    this._detCompraService = DetCompraService;
  }

  async getDetCompras(req,res) {
    let detCompras = await this._detCompraService.getDetCompras();
    return res.send({
      error: false,
      message: detCompras
    });
  }

  async getDetCompra(req,res) {
    let { id } = req.params;
    let detCompra = await this._detCompraService.getDetCompra(id);
    if(!detCompra) {
      return res.status(404).send({
        error: true,
        message: `Detalle Compra con id: ${id} no existe.`,
      });
    }
    return res.send({
      error: false,
      message: detCompra
    });
  } 

  async crearDetCompra(req, res){
    try {      
      const { body }  = req;
      const crearDetCompra = await this._detCompraService.create(body);
      if(crearDetCompra) {
        return res.status(201).send({
          error: false,
          message: "Registro creado con exito!"
        })
      }
    } catch (error) {
      res.status(401).send(error)
    }
  }

  async updateDetCompra(req, res){
    const { body } = req;
    const { id } = req.params;
    const response = await this._detCompraService.updateDetCompra(id, body);
    if(!response) {
      return res.status(404).send({
        message: "Registro no encontrado",
      });
    }
    return res.status(206).send({
      error: false,
      message: "Registro actualizado con exito!",
      material: response[1]
    });
  }

  async deleteDetCompra(req, res){
    const {id} = req.params;
    await this._detCompraService.deleteDetCompra(id);
    return res.status(206).send({
      error: false,
      message: "Se ha eliminado el registro con exito!",
      payload: id
    })
  }
}

module.exports = DetCompraController;