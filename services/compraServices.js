const BaseService = require('./baseServices');


class CompraService extends BaseService {
  constructor( { CompraBusiness } ) {
    super(CompraBusiness);
  }

  async getCompras() {
    const entity = await this._entityBusiness.getCompras();
    return entity;
  }

  async getCompraById(id) {
    const entity = await this._entityBusiness.getCompraById(id);
    return entity;
  }

  async updateCompra(id,entity) {
    const updateEntity = await this._entityBusiness.updateCompra(id,entity);
    return updateEntity;
  }

  async deleteCompra(id) {
    const deleteCompra = await this._entityBusiness.deleteCompra(id);
    return deleteCompra;
  }
}

module.exports = CompraService;