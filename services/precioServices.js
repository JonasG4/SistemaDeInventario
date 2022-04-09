const BaseService = require('./baseServices');

class PrecioService extends BaseService {
  constructor({ PrecioBusiness }) {
    super(PrecioBusiness);
  }
}

module.exports = PrecioService;