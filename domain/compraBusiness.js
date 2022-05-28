const BaseBusiness = require('./baseBusiness');
const { Compra } = require('./models');
const mapper = require("automapper-js");

class CompraBusiness extends BaseBusiness {
  constructor({ CompraRepository }) {
    super(CompraRepository,Compra);
  }

  async getCompras() {
    const compras = await this._entityRepository.getCompras();
    return compras;
  }

  async getCompraById(id) {
    const entity = await this._entityRepository.getCompraById(id);
    if(!entity) return null;
    return entity.toJSON();
  }

  async updateCompra(id,entity) {
    entity.fecha_mod = new Date().toUTCString();
    entity.id_compra = id;
    entity = mapper(this.entityToMap, entity);
    const updateEntity = await this._entityRepository.updateCompra(id,entity);
    return updateEntity
  }

  async deleteCompra(id) {
    return await this._entityRepository.deleteCompra(id);
  }
}

module.exports = CompraBusiness;