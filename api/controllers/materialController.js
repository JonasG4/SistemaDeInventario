const mapper = require("automapper-js");
const { MaterialDto } = require("../dtos");

class MaterialController {
  constructor({ MaterialService }) {
    this._materialService = MaterialService;
  }

  async getMateriales(req,res) {
    let materiales = await this._materialService.getAll();
    return res.send({
      error: false,
      message: materiales
    });
  }

  async getMaterial(req,res) {
    let { id } = req.params;
    let material = await this._materialService.getMaterialById(id);
    if(!material) {
      return res.status(404).send({
        error: true,
        message: `Material con id: ${id} no existe.`,
      });
    }
    return res.send({
      error: false,
      message: material
    });
  } 

  async crearMaterial(req, res){
    try {      
      const { body }  = req;
      const crearMaterial = await this._materialService.create(body);
      if(crearMaterial) {
        return res.status(201).send({
          error: false,
          message: "Material creado con exito!"
        })
      }
    } catch (error) {
      res.status(401).send(error)
    }
  }

  async modificarMaterial(req, res){
    const { body } = req;
    const { id } = req.params;
    const response = await this._materialService.updateMaterial(id, body);
    if(!response) {
      return res.status(404).send({
        message: "Registro no encontrado",
      });
    }
    return res.status(204).send({
      error: false,
      message: "Registro actualizado con exito!",
      material: response[1].dataValues
    });
  }

  async borrarMaterial(req, res){
    const {id} = req.params;
    await this._materialService.deleteMaterial(id);
    return res.status(206).send({
      error: false,
      message: "Se ha eliminado el registro con exito!",
      payload: id
    })
  }
}

module.exports = MaterialController;