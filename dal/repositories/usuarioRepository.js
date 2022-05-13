const res = require("express/lib/response");
const BaseRepository = require("./baseRepository");

const entity = "Usuario";
class UsuarioRepository extends BaseRepository {
  constructor({ db }) {
    super(db, entity);
  }

  getAllUsuarios() {
    return this._db[this.entity].findAll({ include: this._db.Roles });
  }

  getUsuarioByEmail(email) {
    const response = this._db[this.entity].findOne({
      where: {
        email: email,
      },
      include: [this._db.Roles],
    });
    if (!response) return null;
    return response;
  }

  getUsuarioById(id) {
    const response = this._db[this.entity].findOne({
      where: {
        id_usuario: id,
      },
    });

    if (!response) {
      return null;
    }
    return response;
  }

  createUsuario(entity) {
    return this._db[this.entity].create(entity);
  }

  updateUsuario(id, entity) {
    const response = this._db[this.entity].update(entity, {
      where: {
        id_usuario: id,
      },
    });
    if (!response) {
      return null;
    }

    return response;
  }

  deleteUsuario(id) {
    return this._db[this.entity].destroy({ where: { id_usuario: id } });
  }
}

module.exports = UsuarioRepository;
