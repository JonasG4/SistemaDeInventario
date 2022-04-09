const BaseBusiness = require("./baseBusiness");
const { Usuario } = require("./models");
const mapper = require("automapper-js")

class UsuarioBusiness extends BaseBusiness {
  constructor({ UsuarioRepository }) {
    super(UsuarioRepository, Usuario);
  }

  async getUsuarioByEmail(email){
    const entity = await this._entityRepository.getUsuarioByEmail(email);
    if(!entity) return null;
    return entity.toJSON();
  }

  async getUsuarioById(id){
    const entity = await this._entityRepository.getUsuarioById(id);
    if(!entity) return null;
    return mapper(this.entityToMap, entity.toJSON());
  }

  async createUsuario(entity){
    entity.created_at = new Date().toUTCString();
    entity.updated_at = new Date().toUTCString();
    entity = mapper(this.entityToMap, entity);
    const createdEntity = await this._entityRepository.createUsuario(entity);
    return mapper(this.entityToMap, createdEntity.toJSON());
  }

  async updateUsuario(id, entity){
    entity.id_usuario = id;
    entity.updated_at = new Date().toUTCString();
    entity = mapper(this.entityToMap, entity);
    const updatedEntity = await this._entityRepository.updateUsuario(id, entity);
    return mapper(this.entityToMap, updatedEntity);
  }

  async deleteUsuario(id){
    return await this._entityRepository.deleteUsuario(id);
  }
}

module.exports = UsuarioBusiness;
