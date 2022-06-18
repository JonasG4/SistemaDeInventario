const BaseRepository = require('./baseRepository');

class UnidadesRepository extends BaseRepository {
  constructor( { db } ) {
    super(db,"Unidades");
  }

  getUnidades() {
    return this._db[this.entity].findAll();
  }

  getUnidadById(id) {
    const response = this._db[this.entity].findOne({
      where: {
        id_unidad: id
      }
    });

    if (!response) {
      return null;
    }
    return response;
  }

  getUnidadByName(name) {
    const response = this._db[this.entity].findOne({
      where: {
        nombre: name
      }
    });

    if(!response) return null;

    return response;
  }

  async createUnidad(entity) {
    return this._db[this.entity].create(entity);
  }

  updateUnidad(id,entity) {
    const response = this._db[this.entity].update(entity, {
      where: {
        id_unidad: id,
      },
      returning: true,
      plain: true,
    });
    if(!response) return null;

    return response;
  }

  deleteUnidad(id) {
    return this._db[this.entity].destroy({where: {id_unidad: id}});
  }
}

module.exports = UnidadesRepository;