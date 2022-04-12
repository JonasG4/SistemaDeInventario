const BaseService = require('./baseServices');

class ProductoService extends BaseService {
  constructor( { ProductoBusiness } ) {
    super(ProductoBusiness);
  }

  async updateProducto(id,entity) {
    const updateEntity = await this._entityBusiness.updateProducto(id,entity);
    return updateEntity;
  }
}

module.exports = ProductoService;