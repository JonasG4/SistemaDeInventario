const { Router } = require("express");

module.exports = function ({ AuthController }) {
  const router = Router();

  router.get(
    "/",
    AuthController.restoreUser.bind(AuthController),
    (req, res) => {
      console.log(req.usuario);

      if(!req.usuario){
        return res.status(404).json({
          'msg': 'El token no existe'
        })
      }
      return res.status(200).json(req.usuario);
    }
  );
  router.post("/login", AuthController.login.bind(AuthController));
  router.delete("/logout");

  return router;
};
