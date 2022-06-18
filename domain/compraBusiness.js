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

  async createBuy(entity) {
    entity.fecha_mod = new Date().toString();
    entity = mapper(this.entityToMap, entity);
    let createdEntity = await this._entityRepository.createBuy(entity);
    createdEntity = await this._entityRepository.getCompraById(createdEntity.id_compra);
    return createdEntity.toJSON();
  }

  async updateCompra(id,entity) {
    entity.fecha_mod = new Date().toUTCString();
    entity.id_compra = id;
    entity = mapper(this.entityToMap, entity);
    let updateEntity = await this._entityRepository.updateCompra(id,entity);
    updateEntity = await this._entityRepository.getCompraById(updateEntity[1].id_compra);
    return updateEntity;
  }

  async deleteCompra(id) {
    return await this._entityRepository.deleteCompra(id);
  }
}

module.exports = CompraBusiness;