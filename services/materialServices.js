const BaseService = require('./baseServices');


class MaterialService extends BaseService {
  constructor( { MaterialBusiness } ) {
    super(MaterialBusiness);
  }

  async getMaterialById(id) {
    const entity = await this._entityBusiness.getMaterialById(id);
    return entity;
  }

  async getMaterialByName(name){
    const entity = await this._entityBusiness.getMaterialByName(name);
    return entity;
  }

  async updateMaterial(id,entity) {
    const updateEntity = await this._entityBusiness.updateMaterial(id,entity);
    return updateEntity;
  }

  async deleteMaterial(id) {
    const deleteProveedor = await this._entityBusiness.deleteMaterial(id);
    return deleteProveedor;
  }
}

module.exports = MaterialService;