const BaseRepository = require('./baseRepository');
const models = require('../models/index')
class ProductoRepository extends BaseRepository {
  constructor( { db } ) {
    super(db, "Productos")
  }

  getProductos() {
    const response = this._db[this.entity].findAll({
      include: [{model: models.Categorias, required: true}]
    });
    return response;
  }

  getProducto(id) {
    const response = this._db[this.entity].findOne({
      include: [{model: models.Categorias, required: true}],
      where: {
        id_producto: id
      }
    });

    if(!response) {
      return null;
    }

    return response;
  }

  updateProducto(id,entity) {
    const response = this._db[this.entity].update(entity, {
      where: {
        id_producto: id
      }
    })
    if(!response) {
      return null;
    }
    return response;
  }

  deleteProducto(id) {
    return this._db[this.entity].destroy({ where: { id_producto: id } });
  }
}

module.exports = ProductoRepository;