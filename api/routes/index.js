const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function ({ UsuarioRoutes, RolRoutes, AuthRoutes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
  .use(cors())
  .use(bodyParser.json())
  .use(compression());

  apiRoute.use("/usuarios", UsuarioRoutes);
  apiRoute.use("/roles", RolRoutes);
  apiRoute.use("/auth", AuthRoutes)
  router.use("/api", apiRoute);

  return router;
};
