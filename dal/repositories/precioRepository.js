const BaseRepository = require('./baseRepository');
const models = require('../models/index');

class PrecioRepository extends BaseRepository {
  constructor( { db } ) {
    super(db, "Precios");
  }

  getPrecios() {
    const response = this._db[this.entity].findAll({
      include: [{model: models.Productos, required: true}]
    });
    return response;
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