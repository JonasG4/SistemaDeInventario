const { Router } = require('express');

module.exports = function({ PrecioController }) {
  const router = Router();

  router.get('/', PrecioController.getPrecios.bind(PrecioController));
  router.get('/:id', PrecioController.getPrecio.bind(PrecioController));
  router.post('/', PrecioController.crearPrecio.bind(PrecioController));
  router.put('/:id', PrecioController.modificarPrecio.bind(PrecioController));
  // router.delete('/:id', PrecioController.borrarPrecio.bind(PrecioController));

  return router;
}