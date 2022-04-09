const BaseService = require('./baseServices');

class ProductoService extends BaseService {
  constructor( { ProductoBusiness } ) {
    super(ProductoBusiness);
  }
}

module.exports = ProductoService;