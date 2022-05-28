const { Router } = require('express');

module.exports = function({ MaterialController }) {
  const router = Router();

  router.get('/', MaterialController.getMateriales.bind(MaterialController));
  router.get('/:id', MaterialController.getMaterial.bind(MaterialController));
  router.post('/', MaterialController.crearMaterial.bind(MaterialController));
  router.put('/:id', MaterialController.modificarMaterial.bind(MaterialController));
  router.delete('/:id', MaterialController.borrarMaterial.bind(MaterialController));

  return router;
}