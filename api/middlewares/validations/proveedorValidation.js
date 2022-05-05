const { handleValidationErrors } = require('./validationsBase');
const { check } = require('express-validator');

class ProveedorValidation {
  constructor({ ProveedorService }) {
    this._proveedorService = ProveedorService;
  }

  validate() {
    const validation = [
      check("nom_proveedor")
        .exists({checkFalsy: false})
        .notEmpty()
        .withMessage("Es necesario el nombre del proveedor")
        .custom(async (name) => {
          await this._proveedorService.getPreoveedorByName(name)
            .then((result) => {
              if(result) {
                return Promise.reject("Nombre de proveedor ya existe")
              }
            })
        })
        .withMessage("Nombre de proveedor ya existe"),
      check("tel_personal")
        .exists({checkFalsy: false})
        .notEmpty()
        .withMessage("Teléfono personal es necesario"),
        handleValidationErrors
    ];

    return validation;
  }
}

module.exports = ProveedorValidation;