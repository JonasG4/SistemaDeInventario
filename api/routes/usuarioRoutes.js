const { Router } = require("express");

module.exports = function ({
  UsuarioController,
  AuthMiddleware,
  UsuarioValidation,
}) {
  const router = Router();

  router.get("/", UsuarioController.getUsuarios.bind(UsuarioController));
  router.get("/:id", UsuarioController.getUsuario.bind(UsuarioController));

  router.post(
    "/",
    UsuarioValidation.validate(),
    UsuarioController.createUsuario.bind(UsuarioController)
  );

  router.put("/:id", UsuarioController.updateUsuario.bind(UsuarioController));
  router.delete(
    "/:id",
    UsuarioController.deleteUsuario.bind(UsuarioController)
  );

  return router;
};
