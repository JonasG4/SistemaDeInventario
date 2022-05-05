const BaseBusiness = require('./baseBusiness');
const { Categorias } = require('./models');
const mapper = require("automapper-js")

class CategoriasBusiness extends BaseBusiness {
  constructor({ CategoriaRepository }) {
    super(CategoriaRepository, Categorias)
  }

  async getCategoriaById(id){
    const entity = await this._entityRepository.getCategoriaById(id);
    if(!entity) return null;
    return mapper(this.entityToMap, entity.toJSON());
  }

  async getCategoriaByName(name) {
    const entity = await this._entityRepository.getCategoriaByName(name);
    if(!entity) return null;
    return mapper(this.entityToMap, entity.toJSON());
  }

  async updateCategoria(id,entity) {
    entity.id_categoria = id;
    entity = mapper(this.entityToMap, entity);
    const updateEntity = await this._entityRepository.updateCategoria(id,entity);
    return mapper(this.entityToMap,updateEntity);
  }

  async deleteCategoria(id) {
    return await this._entityRepository.deleteCategoria(id);
  }
}

module.exports = CategoriasBusiness;