const BaseRepository = require('./baseRepository');
const {Usuario, Proveedores} = require('../models/index');

class CompraRepository extends BaseRepository {
  constructor( { db } ) {
    super(db,"Compras");
  }

  getCompras() {
    return this._db[this.entity].findAll({
      include: [
        {model: Usuario, required: true},
        {model: Proveedores, required: true},
      ]
    })
  }

  getCompraById(id) {
    const response = this._db[this.entity].findOne({
      include: [
        {model: Proveedores, required: true},
        {model: Usuario, required: true}
      ],
      where: {
        id_compra: id,
      },
    });

    if (!response) {
      return null;
    }
    return response;
  }

  updateCompra(id,entity) {
    const response = this._db[this.entity].update(entity, {
      where: {
        id_compra: id,
      },
      returning: true,
      plain: true,
    });
    if(!response) return null;

    return response;
  }

  deleteCompra(id) {
    return this._db[this.entity].destroy({where: {id_compra: id}});
  }
}

module.exports = CompraRepository;