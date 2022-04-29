const { handleValidationErrors } = require('./validationsBase');
const { check } = require('express-validator');

class CategoryValidation {
  constructor() {

  }

  validate() {
    const validation = [
      check("nombre")
        .exists({checkFalsy: false})
        .notEmpty()
        .withMessage("Es necesario un nombre"),
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