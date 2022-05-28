const BaseService = require('./baseServices');


class DetCompraService extends BaseService {
  constructor( { DetCompraBusiness } ) {
    super(DetCompraBusiness);
  }

  async getDetCompras() {
    const entity = await this._entityBusiness.getDetCompras();
    return entity;
  }

  async getDetCompra(id) {
    const entity = await this._entityBusiness.getDetCompra(id);
    return entity;
  }

  async updateDetCompra(id,entity) {
    const updateEntity = await this._entityBusiness.updateDetCompra(id,entity);
    return updateEntity;
  }

  async deleteDetCompra(id) {
    const deleteCompra = await this._entityBusiness.deleteDetCompra(id);
    return deleteCompra;
  }
}

module.exports = DetCompraService;