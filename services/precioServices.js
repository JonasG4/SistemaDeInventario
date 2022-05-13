const BaseService = require('./baseServices');

class PrecioService extends BaseService {
  constructor({ PrecioBusiness }) {
    super(PrecioBusiness);
  }

  async getPrecios() {
    const entity = await this._entityBusiness.getPrecios();
    return entity;
  }

  async getPrecioById(id) {
    const entity = await this._entityBusiness.getPrecioById(id);
    return entity;
  }

  async updatePrecio(id,entity) {
    const updateEntity = await this._entityBusiness.updatePrecio(id,entity);
    return updateEntity;
  }
}

module.exports = PrecioService;