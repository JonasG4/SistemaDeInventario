const BaseRepository = require('./baseRepository');
const models = require('../models/proveedores');

class ProveedorRepository extends BaseRepository {
  constructor( {db} ) {
    super(db,"Proveedores");
  }

  getProveedor(id) {
    const response = this._db[this.entity].findOne({
      where: {
        id_proveedor: id
      }
    });

    if(!response) return null;

    return response;
  }

  getPreoveedorByName(name) {
    const response = this._db[this.entity].findOne({
      where: {
        nom_proveedor: name
      }
    });

    if(!response) return null;

    return response;
  }

  updateProveedor(id,entity) {
    const response = this._db[this.entity].update(entity, {
      where: {
        id_proveedor: id
      }
    });
    if(!response) return null;

    return response;
  }

  deleteProveedor(id) {
    return this._db[this.entity].destroy({where: {id_proveedor: id}});
  }
}

module.exports = ProveedorRepository;