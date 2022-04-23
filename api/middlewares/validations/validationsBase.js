const { validationResult } = require("express-validator");

const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const errors = bindErrors(validationErrors);

    const err = Error("Errores de validación");
    err.errors = errors;
    err.status = 400;
    err.title = "Bad Request";
    next(err);
  }
  next();
};

function bindErrors(obj) {
  let errors = new Object();

  obj.array().forEach((value, index, arr) => {
    //Retiene el params en ciclo
    //Ejemplo: index: 0, params = nombre, index: 2, params: apellido
    const params = value.param;

    //Separa los mensajes de error segun su params
    //Ejemplo: ["Nombre nulo", "Nombre sin numeros"], ["Apellido nulo", "Apellido sin numeros"]
    const messages = arr.filter((x) => x.param == params);

    //Asigna los mensajes de error a la Key correspondiente
    //Ejemplo: Nombre: ["Nombre nulo", "Nombre sin numeros"], ...
    errors[params] = messages.map((err) => `${err.msg}`);
  });

  return errors;
}

module.exports = {
  handleValidationErrors,
};
