const BaseRepository = require("./baseRepository")

class UsuarioRepository extends BaseRepository{
  constructor({ db }) {
      super(db, "Usuario")
  }
}

module.exports = UsuarioRepository;
