const BaseService = require('./baseServices');

class CategoriaService extends BaseService {
  constructor({ CategoriasBusiness }) {
    super(CategoriasBusiness);
  }
}

module.exports = CategoriaService;