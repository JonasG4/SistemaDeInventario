const BaseService = require('./baseServices');

class ProductoService extends BaseService {
  constructor( { ProductoBusiness } ) {
    super(ProductoBusiness);
  }

  async getProductos() {
    const entity = await this._entityBusiness.getProductos();
    return entity;
  }

  async getProducto(id) {
    const entity = await this._entityBusiness.getProducto(id);
    return entity;
  }

  async updateProducto(id,entity) {
    const updateEntity = await this._entityBusiness.updateProducto(id,entity);
    return updateEntity;
  }

  async deleteProducto(id) {
    const deleteProducto = await this._entityBusiness.deleteProducto(id);
    return deleteProducto;
  }
}

module.exports = ProductoService;