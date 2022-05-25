const BaseRepository = require('./baseRepository');
const {Compras, Materiales} = require('../models/index');

class DetCompraRepository extends BaseRepository {
  constructor( { db } ) {
    super(db,"Det_compras");
  }

  getDetCompras() {
    return this._db[this.entity].findAll({
      include: [
        {model: Compras, required: true},
        {model: Materiales, required: true},
      ]
    })
  }

  getDetCompra(id) {
    const response = this._db[this.entity].findOne({
      include: [
        {model: Compras, required: true},
        {model: Materiales, required: true},
      ],
      where: {
        id_det_compra: id,
      },
    });

    if (!response) {
      return null;
    }
    return response;
  }

  updateDetCompra(id,entity) {
    const response = this._db[this.entity].update(entity, {
      where: {
        id_det_compra: id,
      },
      returning: true,
      plain: true,
    });
    if(!response) return null;

    return response;
  }

  deleteDetCompra(id) {
    return this._db[this.entity].destroy({where: {id_det_compra: id}});
  }
}

module.exports = DetCompraRepository;