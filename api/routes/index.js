const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function ({ UsuarioRoutes, CategoriaRoutes, ProductoRoutes, PrecioRoutes, RolRoutes, AuthRoutes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
  .use(cors())
  .use(bodyParser.json())
  .use(compression());

  apiRoute.use('/categorias', CategoriaRoutes);
  apiRoute.use('/productos',ProductoRoutes);
  apiRoute.use('/precios', PrecioRoutes);
  apiRoute.use('/productos',ProductoRoutes)
  apiRoute.use("/usuarios", UsuarioRoutes);
  apiRoute.use("/roles", RolRoutes);
  apiRoute.use("/auth", AuthRoutes)
  router.use("/api", apiRoute);

  return router;
};
