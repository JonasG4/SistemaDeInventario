const { handleValidationErrors } = require('./validationsBase');
const { check } = require('express-validator');

class PriceValidation {
  constructor() {}

  validate() {
    const validation = [
      check("id_producto")
        .exists({checkFalsy: false})
        .notEmpty()
        .withMessage("Es necesario el id del producto")
        .isInt()
        .withMessage("El id del producto debe ser un número válido"),
      check("precio")
        .exists({checkFalsy: false})
        .notEmpty()
        .withMessage("Es necesario el precio del producto")
        .isFloat({min: 1})
        .withMessage("El precio debe ser positivo y mayor que 1"),
        handleValidationErrors
    ];
    return validation;
  }
}

module.exports = PriceValidation;