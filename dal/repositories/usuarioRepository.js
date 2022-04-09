const res = require("express/lib/response");
const BaseRepository = require("./baseRepository");

const entity = "Usuario";
class UsuarioRepository extends BaseRepository {
  constructor({ db }) {
    super(db, entity);
  }

  getUsuarioByEmail(email) {
    const response = this._db[this.entity].findOne({
      where: {
        email: email
      }
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
