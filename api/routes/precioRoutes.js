const { Router } = require('express');

module.exports = function({ PrecioController,PriceValidation }) {
  const router = Router();

  router.get('/', PrecioController.getPrecios.bind(PrecioController));
  router.get('/:id', PrecioController.getPrecio.bind(PrecioController));
  router.post('/', 
  PriceValidation.validate(),
  PrecioController.crearPrecio.bind(PrecioController));
  router.put('/:id', PrecioController.modificarPrecio.bind(PrecioController));
  // router.delete('/:id', PrecioController.borrarPrecio.bind(PrecioController));

  return router;
}