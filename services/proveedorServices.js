const BaseService = require('./baseServices');

class ProveedorService extends BaseService {
  constructor( { ProveedorBusiness } ) {
    super(ProveedorBusiness);
  }

  async getProveedor(id) {
    console.log(id)
    const entity = await this._entityBusiness.getProveedor(id);
    return entity;
  }

  async getPreoveedorByName(name){
    const entity = await this._entityBusiness.getPreoveedorByName(name);
    return entity;
  }

  async updateProveedor(id,entity) {
    const updateEntity = await this._entityBusiness.updateProveedor(id,entity);
    return updateEntity;
  }

  async deleteProveedor(id) {
    const deleteProveedor = await this._entityBusiness.deleteProveedor(id);
    return deleteProveedor;
  }
}

module.exports = ProveedorService;