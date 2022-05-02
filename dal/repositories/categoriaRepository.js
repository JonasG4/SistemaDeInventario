const BaseRepository = require('./baseRepository');

class CategoriaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Categorias")
  }

  getCategoriaById(id) {
    const response = this._db[this.entity].findOne({
      where: {
        id_categoria: id,
      },
    });

    if (!response) {
      return null;
    }
    return response;
  }

  getCategoriaByName(name) {
    const response = this._db[this.entity].findOne({
      where: {
        nombre: name
      }
    });
    if(!response) return null;
    return response;
  }

  updateCategoria(id, entity) {
    const response = this._db[this.entity].update(entity, {
      where: {
        id_categoria: id,
      },
    });
    if (!response) {
      return null;
    }

    return response;
  }

  deleteCategoria(id) {
    return this._db[this.entity].destroy({ where: { id_categoria: id } });
  }
}

module.exports = CategoriaRepository;