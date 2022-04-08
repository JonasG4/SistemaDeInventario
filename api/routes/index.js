const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function ({ UsuarioRoutes, CategoriaRoutes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
  .use(cors())
  .use(bodyParser.json())
  .use(compression());

  apiRoute.use("/usuario", UsuarioRoutes);
  apiRoute.use('/categorias', CategoriaRoutes);
  router.use("/api", apiRoute);

  return router;
};
