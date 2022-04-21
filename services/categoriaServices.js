const BaseService = require('./baseServices');

class CategoriaService extends BaseService {
  constructor({ CategoriasBusiness }) {
    super(CategoriasBusiness);
  }

  async getCategoriaById(id) {
    const entity = await this._entityBusiness.getCategoriaById(id);
    return entity;
  }

  async updateCategoria(id,entity) {
    const updateEntity = await this._entityBusiness.updateCategoria(id, entity);
    return updateEntity;
  }

  async deleteCategoria(id) {
    const deleteCategoria = await this._entityBusiness.deleteCategoria(id);
    return deleteCategoria;
  }
}

module.exports = CategoriaService;