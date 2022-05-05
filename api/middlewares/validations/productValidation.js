const { handleValidationErrors } = require('./validationsBase');
const { check } = require('express-validator');

class ProductValidation {
  constructor(){}

  validate() {
    const validation = [
      check("nom_producto")
        .exists({checkFalsy: false})
        .notEmpty()
        .withMessage("Es necesario el nombre del producto"),
      check("tam_producto")
        .exists({checkFalsy: false})
        .notEmpty()
        .withMessage("Es necesario el tamaño del producto"),
      check("des_producto")
        .exists({checkFalsy: false})
        .notEmpty()
        .withMessage("Es necesario la descripción del producto"),
      check("cod_categoria")
        .exists({checkFalsy: false})
        .notEmpty()
        .withMessage("Es necesario el código de la categoria")
        .isInt()
        .withMessage("Código de categoría debe ser un número válido"),
        handleValidationErrors
    ];
    return validation;
  }
}

module.exports = ProductValidation;