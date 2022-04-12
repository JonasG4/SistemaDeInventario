const BaseRepository = require('./baseRepository');

class ProductoRepository extends BaseRepository {
  constructor( { db } ) {
    super(db, "Productos")
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