const BaseBusiness = require('./baseBusiness');
const { Precios } = require('./models');
const mapper = require("automapper-js")

class PrecioBusiness extends BaseBusiness {
  constructor({ PrecioRepository }) {
    super(PrecioRepository, Precios);
  }

  async getPrecios() {
    const precios = await this._entityRepository.getPrecios();
    return precios;
  }

  async updatePrecio(id,entity) {
    entity.updated_at = new Date().toLocaleString();
    entity.id = id;
    entity = mapper(this.entityToMap, entity);
    const updatedEntity = await this._entityRepository.updatePrecio(id,entity);
    return mapper(this.entityToMap, updatedEntity);
  }
}

module.exports = PrecioBusiness;