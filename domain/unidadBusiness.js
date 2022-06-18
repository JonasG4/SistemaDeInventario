const BaseBusiness = require('./baseBusiness');
const { Unidad } = require('./models');
const mapper = require("automapper-js");

class UnidadBusiness extends BaseBusiness {
  constructor({ UnidadesRepositoty }) {
    super(UnidadesRepositoty,Unidad);
  }

  async getUnidades() {
    const unidades = await this._entityRepository.getUnidades();
    return unidades;
  }

  async getUnidadById(id) {
    const entity = await this._entityRepository.getUnidadById(id);
    if(!entity) return null;
    return entity.toJSON();
  }

  async getUnidadByName(name) {
    const entity = await this._entityRepository.getUnidadByName(name);
    if(!entity) return null;
    return mapper(this.entityToMap, entity.toJSON());
  }

  async createUnidad(entity) {
    let createdEntity = await this._entityRepository.createUnidad(entity);
    createdEntity = await this._entityRepository.getUnidadById(createdEntity.id_unidad);
    return createdEntity.toJSON();
  }

  async updateUnidad(id,entity) {
    entity.id_unidad = id;
    entity = mapper(this.entityToMap, entity);
    const updateEntity = await this._entityRepository.updateUnidad(id,entity);
    return updateEntity
  }

  async deleteUnidad(id) {
    return await this._entityRepository.deleteUnidad(id);
  }
}

module.exports = UnidadBusiness;