
const { Router } = require('express');

module.exports = function({ DetCompraController }) {
  const router = Router();

  router.get('/', DetCompraController.getDetCompras.bind(DetCompraController));
  router.get('/:id', DetCompraController.getDetCompra.bind(DetCompraController));
  router.post('/', DetCompraController.crearDetCompra.bind(DetCompraController));
  router.put('/:id', DetCompraController.updateDetCompra.bind(DetCompraController));
  router.delete('/:id', DetCompraController.deleteDetCompra.bind(DetCompraController));

  return router;
}