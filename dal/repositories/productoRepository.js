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

  updateProducto(id,entity) {
    const response = this._db[this.entity].update(entity, {
      where: {
        id: id
      }
    })
    if(!response) {
      return null;
    }
    return response;
  }
}

module.exports = ProductoRepository;