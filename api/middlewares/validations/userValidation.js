const { handleValidationErrors } = require("./validationsBase");
const { check } = require("express-validator");

class UsuarioValidation {
  constructor({ UsuarioService }) {
    this._usuarioService = UsuarioService;
  }

  validate() {
    const validation = [
      check("nombre")
        .exists({ checkFalsy: false })
        .notEmpty()
        .withMessage("Es necesario un nombre")
        .isAlpha("es-ES", { ignore: "s*" })
        .withMessage(
          "El nombre no debe contener números ni carácteres especiales."
        ),
      check("apellido")
        .exists({ checkFalsy: false })
        .notEmpty()
        .withMessage("Es necesario un apellido")
        .isAlpha("es-ES", { ignore: "s*" })
        .withMessage(
          "El apellido no debe contener números ni carácteres especiales."
        ),
      check("email")
        .exists({ checkFalsy: false })
        .notEmpty()
        .withMessage("Es necesario un correo electrónico")
        .isEmail()
        .withMessage("Ingrese un email válido")
        .custom(async (email) => {
          await this._usuarioService.checkEmailExist(email).then((result) => {
            if (result) {
              return Promise.reject("El correo electronico ya está en uso");
            }
          });
        })
        .withMessage("Este correo ya está en uso"),
      check("password")
        .exists({ checkFalsy: false })
        .notEmpty()
        .withMessage("Es neceseria una contraseña")
        .isLength({ min: 8 })
        .withMessage("La contraseña debe tener al menos 8 carácteres")
        .isStrongPassword({ minSymbols: 0 })
        .withMessage(
          "La contraseña debe contener al menos una letra mayúscula, una minúscula y un número"
        ),

        //AGREGASTE ESTO?
      handleValidationErrors,
    ];

    return validation;
  }
}

module.exports = UsuarioValidation;
