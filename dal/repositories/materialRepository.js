const BaseRepository = require('./baseRepository');
const models = require('../models/materiales');

class MaterialRepository extends BaseRepository {
  constructor( { db } ) {
    super(db,"Materiales");
  }

  getMateriales() {
    return this._db[this.entity].findAll({
      include: this._db.Usuarios
    })
  }

  getMaterialById(id) {
    const response = this._db[this.entity].findOne({
      where: {
        id_material: id,
      },
    });

    if (!response) {
      return null;
    }
    return response;
  }

  getMaterialByName(name) {
    const response = this._db[this.entity].findOne({
      where: {
        nombre: name
      }
    });

    if(!response) return null;

    return response;
  }

  updateMaterial(id,entity) {
    const response = this._db[this.entity].update(entity, {
      where: {
        id_material: id
      }
    });
    if(!response) return null;

    return response;
  }

  deleteMaterial(id) {
    return this._db[this.entity].destroy({where: {id_material: id}});
  }
}

module.exports = MaterialRepository;