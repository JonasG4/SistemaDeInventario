const BaseRepository = require('./baseRepository');

class ProductoRepository extends BaseRepository {
  constructor( { db } ) {
    super(db, "Productos")
  }
}

module.exports = ProductoRepository;