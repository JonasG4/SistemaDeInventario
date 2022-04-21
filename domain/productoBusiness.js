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

  async updateProducto(id,entity) {
    entity.updated_at = new Date().toLocaleString();
    console.log(entity.updatedAt)
    entity.id = id;
    entity = mapper(this.entityToMap, entity);
    const updatedEntity = await this._entityRepository.updateProducto(id, entity);
    return mapper(this.entityToMap, updatedEntity);
  }
}

module.exports = ProductoBusiness;