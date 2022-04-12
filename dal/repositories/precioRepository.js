const BaseRepository = require('./baseRepository');

class PrecioRepository extends BaseRepository {
  constructor( { db } ) {
    super(db, "Precios");
  }

  updatePrecio(id,entity) {
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

module.exports = PrecioRepository;