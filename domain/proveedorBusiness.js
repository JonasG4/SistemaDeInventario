const BaseBusiness = require('./baseBusiness');
const { Proveedores } = require('./models');
const mapper = require("automapper-js");

class ProveedorBusiness extends BaseBusiness {
  constructor({ ProveedorRepository }) {
    super(ProveedorRepository,Proveedores);
  }

  async getProveedor(id) {
    const entity = await this._entityRepository.getProveedor(id);
    if(!entity) return null;
    return entity.toJSON();
  }

  async getPreoveedorByName(name) {
    const entity = await this._entityRepository.getPreoveedorByName(name);
    if(!entity) return null;
    return mapper(this.entityToMap, entity.toJSON());
  }

  async updateProveedor(id,entity) {
    entity.updated_at = new Date().toUTCString();
    entity.id_proveedor = id;
    entity = mapper(this.entityToMap, entity);
    const updateEntity = await this._entityRepository.updateProveedor(id,entity);
    return mapper(this.entityToMap,updateEntity);
  }

  async deleteProveedor(id) {
    return await this._entityRepository.deleteProveedor(id);
  }
}

module.exports = ProveedorBusiness;