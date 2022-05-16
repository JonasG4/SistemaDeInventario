const { Router } = require('express');

module.exports = function({ CategoriaController,CategoryValidation }) {
  const router = Router();

  router.get('/', CategoriaController.getCategorias.bind(CategoriaController));
  router.get('/:id', CategoriaController.getCategoria.bind(CategoriaController));
  router.post('/', 
  // CategoryValidation.validate(),
  CategoriaController.crearCategoria.bind(CategoriaController));
  router.put('/:id', CategoriaController.modificarCategoria.bind(CategoriaController));
  router.delete('/:id', CategoriaController.borrarCategoria.bind(CategoriaController));

  return router;
}