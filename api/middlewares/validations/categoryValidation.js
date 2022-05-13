const { handleValidationErrors } = require('./validationsBase');
const { check } = require('express-validator');

class CategoryValidation {
  constructor({ CategoriaService }) {
    this._categoriaService =  CategoriaService;
  }

  validate() {
    const validation = [
      check("nombre")
        .exists({checkFalsy: false})
        .notEmpty()
        .withMessage("Es necesario un nombre")
        .custom(async (name) => {
          await this._categoriaService.getCategoriaByName(name)
            .then((result) => {
              if(result) {
                return Promise.reject("El nombre de la categoría ya existe");
              }
            }) 
        })
      .withMessage("Nombre de categoría ya existe"),
      check("descripcion")
        .exists({checkFalsy: false})
        .notEmpty()
        .withMessage("Debes escribir una descripcion"),
        handleValidationErrors,
    ];
    return validation;
  }
}

module.exports = CategoryValidation;