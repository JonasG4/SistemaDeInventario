const BaseRepository = require("./base.repository")

class UsuarioRepository extends BaseRepository{
  constructor({ db}) {
      super(db, "Usuario")
  }
}

module.exports = UsuarioRepository;
