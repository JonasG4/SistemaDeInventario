const mapper = require("automapper-js");
const { MaterialDto } = require("../dtos");

class UnidadController {
  constructor({ UnidadService }) {
    this._unidadService = UnidadService;
  }

  async getUnidades(req,res) {
    let unidades = await this._unidadService.getUnidades();
    return res.send({
      error: false,
      message: unidades
    });
  }

  async getUnidadById(req,res) {
    let { id } = req.params;
    let unidad = await this._unidadService.getUnidadById(id);
    if(!unidad) {
      return res.status(404).send({
        error: true,
        message: `Unidad con id: ${id} no existe.`,
      });
    }
    return res.send({
      error: false,
      message: unidad
    });
  } 

  async createUnidad(req,res) {
    try {      
      const { body }  = req;
      const crearUnidad = await this._unidadService.createUnidad(body);
      if(crearUnidad) {
        return res.status(201).send({
          error: false,
          message: "Unidad creada con exito!",
          unidad: crearUnidad
        })
      }
    } catch (error) {
      console.log('Holaa')
      res.status(401).send(error)
    }
  }

  async updateUnidad(req, res){
    const { body } = req;
    const { id } = req.params;
    const response = await this._unidadService.updateUnidad(id, body);
    if(!response) {
      return res.status(404).send({
        message: "Registro no encontrado",
      });
    }
    return res.status(206).send({
      error: false,
      message: "Registro actualizado con exito!",
      unidad: response[1]
    });
  }

  async deleteUnidad(req, res){
    const {id} = req.params;
    await this._unidadService.deleteUnidad(id);
    return res.status(206).send({
      error: false,
      message: "Se ha eliminado el registro con exito!",
      payload: id
    })
  }
}

module.exports = UnidadController;