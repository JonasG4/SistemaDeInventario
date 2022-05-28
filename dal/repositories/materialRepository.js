const BaseRepository = require('./baseRepository');
const models = require('../models/index');

class MaterialRepository extends BaseRepository {
  constructor( { db } ) {
    super(db,"Materiales");
  }

  getMateriales() {
    return this._db[this.entity].findAll({
      include: [{model: models.Usuario, required: true}]
    })
  }

  getMaterialById(id) {
    const response = this._db[this.entity].findOne({
      include: [{model: models.Usuario, required: true}],
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
      include: [{model: models.Usuario, required: true}],
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
        id_material: id,
      },
      returning: true,
      plain: true,
    });
    if(!response) return null;

    return response;
  }

  deleteMaterial(id) {
    return this._db[this.entity].destroy({where: {id_material: id}});
  }
}

module.exports = MaterialRepository;