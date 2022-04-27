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

  getPrecioById(id) {
    const response = this._db[this.entity].findOne({
      include: [{model: models.Productos, required: true}],
      where: {
        id_precio: id
      }
    });
    if(!response) return null;
    
    return response;
  }

  updatePrecio(id,entity) {
    const response = this._db[this.entity].update(entity, {
      where: {
        id_precio: id
      }
    })

    if(!response) {
      return null;
    }

    return response;
  }
}

module.exports = PrecioRepository;