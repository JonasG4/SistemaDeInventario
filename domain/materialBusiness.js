const BaseBusiness = require('./baseBusiness');
const { Material } = require('./models');
const mapper = require("automapper-js");

class MaterialBusiness extends BaseBusiness {
  constructor({ MaterialRepository }) {
    super(MaterialRepository,Proveedores);
  }

  async getMaterialById(id) {
    const entity = await this._entityRepository.getMaterialById(id);
    if(!entity) return null;
    return entity.toJSON();
  }

  async getMaterialByName(name) {
    const entity = await this._entityRepository.getMaterialByName(name);
    if(!entity) return null;
    return mapper(this.entityToMap, entity.toJSON());
  }

  async updateMaterial(id,entity) {
    entity.fecha_mod = new Date().toUTCString();
    entity.id_material = id;
    entity = mapper(this.entityToMap, entity);
    const updateEntity = await this._entityRepository.updateMaterial(id,entity);
    return mapper(this.entityToMap,updateEntity);
  }

  async deleteMaterial(id) {
    return await this._entityRepository.deleteMaterial(id);
  }
}

module.exports = MaterialBusiness;