const { Router } = require('express');

module.exports = function({ ProductoController,ProductValidation }) {
  const router = Router();
  router.get('/', ProductoController.getProductos.bind(ProductoController));
  router.get('/:id', ProductoController.getProducto.bind(ProductoController));
  router.post('/', 
  ProductValidation.validate(),
  ProductoController.crearProducto.bind(ProductoController));
  router.put('/:id', ProductoController.modificarProducto.bind(ProductoController));
  router.delete('/:id', ProductoController.borrarProducto.bind(ProductoController));

  return router;
}