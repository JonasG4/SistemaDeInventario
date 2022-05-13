const BaseService = require("./baseServices");

class UsuarioService extends BaseService {
  constructor({ UsuarioBusiness }) {
    super(UsuarioBusiness);
  }

  async getAllUsuarios() {
    return await this._entityBusiness.getAllUsuarios();
  }

  async checkEmailExist(email) {
    const result = await this._entityBusiness.getUsuarioByEmail(email);
    return result;
  }

  async getUsuarioByEmail(email) {
    const entity = await this._entityBusiness.getUsuarioByEmail(email);
    return entity;
  }

  async createUsuario(entity) {
    const createdEntity = await this._entityBusiness.create(entity);
    return createdEntity;
  }

  async getUsuarioById(id) {
    const entity = await this._entityBusiness.getUsuarioById(id);
    return entity;
  }

  async updateUsuario(id, entity) {
    const updateEntity = await this._entityBusiness.updateUsuario(id, entity);
    return updateEntity;
  }

  async deleteUsuario(id) {
    const deletedUsuario = await this._entityBusiness.deleteUsuario(id);
    return deletedUsuario;
  }
}

module.exports = UsuarioService;
