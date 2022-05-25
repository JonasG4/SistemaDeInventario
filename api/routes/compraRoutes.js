const { Router } = require('express');

module.exports = function({ CompraController }) {
  const router = Router();

  router.get('/', CompraController.getCompras.bind(CompraController));
  router.get('/:id', CompraController.getCompraById.bind(CompraController));
  router.post('/', CompraController.crearCompra.bind(CompraController));
  router.put('/:id', CompraController.updateCompra.bind(CompraController));
  router.delete('/:id', CompraController.deleteCompra.bind(CompraController));

  return router;
}