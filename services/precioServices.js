const BaseService = require('./baseServices');

class PrecioService extends BaseService {
  constructor({ PrecioBusiness }) {
    super(PrecioBusiness);
  }

  async updatePrecio(id,entity) {
    const updateEntity = await this._entityBusiness.updatePrecio(id,entity);
    return updateEntity;
  }
}

module.exports = PrecioService;