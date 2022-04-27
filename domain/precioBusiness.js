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

  async getPrecioById(id) {
    const entity = await this._entityRepository.getPrecioById(id);
    if(!entity) return null;
    return entity.toJSON();
  }

  async updatePrecio(id,entity) {
    entity.updated_at =  new Date().toUTCString();
    entity.id_precio = id;
    entity = mapper(this.entityToMap, entity);
    const updatedEntity = await this._entityRepository.updatePrecio(id,entity);
    return mapper(this.entityToMap, updatedEntity);
  }
}

module.exports = PrecioBusiness;