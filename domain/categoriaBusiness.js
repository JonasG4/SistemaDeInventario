const BaseBusiness = require('./baseBusiness');
const { Categorias } = require('./models');

class CategoriasBusiness extends BaseBusiness {
  constructor({ CategoriaRepository }) {
    super(CategoriaRepository, Categorias)
  }
}

module.exports = CategoriasBusiness;