const BaseRepository = require('./baseRepository');

class CategoriaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Categorias")
  }
}

module.exports = CategoriaRepository;