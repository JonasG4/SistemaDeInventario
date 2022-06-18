const { Router } = require('express');

module.exports = function({ UnidadController }) {
  const router = Router();

  router.get('/', UnidadController.getUnidades.bind(UnidadController));
  router.get('/:id', UnidadController.getUnidadById.bind(UnidadController));
  router.post('/', UnidadController.createUnidad.bind(UnidadController));
  router.put('/:id', UnidadController.updateUnidad.bind(UnidadController));
  router.delete('/:id', UnidadController.deleteUnidad.bind(UnidadController));

  return router;
}