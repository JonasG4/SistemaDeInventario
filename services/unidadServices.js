const BaseService = require('./baseServices');


class UnidadService extends BaseService {
  constructor( { UnidadBusiness } ) {
    super(UnidadBusiness);
  }

  async getUnidades() {
    const entity = await this._entityBusiness.getUnidades();
    return entity;
  }

  async getUnidadById(id) {
    const entity = await this._entityBusiness.getUnidadById(id);
    return entity;
  }

  async getUnidadByName(name){
    const entity = await this._entityBusiness.getUnidadByName(name);
    return entity;
  }

  async createUnidad(name) {
    const entity = await this._entityBusiness.createUnidad(name);
    return entity;
  }

  async updateUnidad(id,entity) {
    const updateEntity = await this._entityBusiness.updateUnidad(id,entity);
    return updateEntity;
  }

  async deleteUnidad(id) {
    const deleteUnidad = await this._entityBusiness.deleteUnidad(id);
    return deleteUnidad;
  }
}

module.exports = UnidadService;