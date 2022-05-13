const mapper = require("automapper-js");
const { ProveedorDto } = require("../dtos");

class ProveedorController {
  constructor({ ProveedorService }) {
    this._proveedorService = ProveedorService;
  }

  async getProveedores(req,res) {
    let proveedores = await this._proveedorService.getAll();
    return res.send({
      error: false,
      message: proveedores
    });
  }

  async getProveedor(req,res) {
    let { id } = req.params;
    let proveedor = await this._proveedorService.getProveedor(id);
    if(!proveedor) {
      return res.status(404).send();
    }

    proveedor = mapper(ProveedorDto, proveedor);
    return res.send({
      error: false,
      message: proveedor
    });
  } 

  async crearProveedor(req, res){
    try {      
      const { body }  = req;
      const crearProveedor = await this._proveedorService.create(body);
      return res.status(201).send({
        error: false,
        message: "Proveedor creado con exito!"
      })
    } catch (error) {
      res.status(401).send(error)
    }
  }

  async modificarProveedor(req, res){
    const { body } = req;
    const { id } = req.params;
    await this._proveedorService.updateProveedor(id, body);
    return res.status(204).send({
      error: false,
      message: "Registro actualizado con exito!"
    });
  }

  async borrarCategoria(req, res){
    const {id} = req.params;
    await this._proveedorService.deleteProveedor(id);
    return res.status(206).send({
      error: false,
      message: "Se ha eliminado el registro con exito!"
    })
  }
}

module.exports = ProveedorController;