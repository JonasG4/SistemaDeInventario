const { Router } = require('express');

module.exports = function({ ProveedorController,ProveedorValidation }) {
  const router = Router();

  router.get('/', ProveedorController.getProveedores.bind(ProveedorController));
  router.get('/:id', ProveedorController.getProveedor.bind(ProveedorController));
  router.post('/', 
  // ProveedorValidation.validate(),
  ProveedorController.crearProveedor.bind(ProveedorController));
  router.put('/:id', ProveedorController.modificarProveedor.bind(ProveedorController));
  router.delete('/:id', ProveedorController.borrarCategoria.bind(ProveedorController));

  return router;
}