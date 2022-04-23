const BaseService = require("./baseServices");

class UsuarioService extends BaseService {
  constructor({ UsuarioBusiness }) {
    super(UsuarioBusiness);
  }

  async checkEmailExist(email){
    const result = await this._entityBusiness.getUsuarioByEmail(email);
    return result;
  }

  async getUsuarioByEmail(email){
    const entity = await this._entityBusiness.getUsuarioByEmail(email);
    return entity;
  }

  async createUsuario(entity){
    if(entity.passwod.lenght < 8) throw new Error("La contraseña debe tener al menos 8 caracteres");
    const createdEntity = await this._entityBusiness.create(entity);0
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
