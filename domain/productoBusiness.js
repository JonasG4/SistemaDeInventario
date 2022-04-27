const BaseBusiness = require('./baseBusiness');
const { Productos } = require('./models');
const mapper = require("automapper-js")

class ProductoBusiness extends BaseBusiness {
  constructor({ ProductoRepository }) {
    super(ProductoRepository, Productos);
  }

  async getProductos() {
    const productos = await this._entityRepository.getProductos();
    return productos;
  }

  async getProducto(id) {
    const entity = await this._entityRepository.getProducto(id);
    if(!entity) return null;
    return entity.toJSON();
  }

  async updateProducto(id,entity) {
    entity.updated_at =  new Date().toUTCString();
    console.log(entity.updatedAt)
    entity.id_producto = id;
    entity = mapper(this.entityToMap, entity);
    const updatedEntity = await this._entityRepository.updateProducto(id, entity);
    return mapper(this.entityToMap, updatedEntity);
  }

  async deleteProducto(id) {
    return await this._entityRepository.deleteProducto(id);
  }
}

module.exports = ProductoBusiness;