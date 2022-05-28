const BaseBusiness = require('./baseBusiness');
const { DetCompra } = require('./models');
const mapper = require("automapper-js");

class DetCompraBusiness extends BaseBusiness {
  constructor({ DetCompraRepository }) {
    super(DetCompraRepository,DetCompra);
  }

  async getDetCompras() {
    const compras = await this._entityRepository.getDetCompras();
    return compras;
  }

  async getDetCompra(id) {
    const entity = await this._entityRepository.getDetCompra(id);
    if(!entity) return null;
    return entity.toJSON();
  }

  async updateDetCompra(id,entity) {
    entity.id_det_compra = id;
    entity = mapper(this.entityToMap, entity);
    const updateEntity = await this._entityRepository.updateDetCompra(id,entity);
    return updateEntity
  }

  async deleteDetCompra(id) {
    return await this._entityRepository.deleteDetCompra(id);
  }
}

module.exports = DetCompraBusiness;