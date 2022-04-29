const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const { ValidationError } = require("sequelize");

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
  apiRoute.use("/usuarios", UsuarioRoutes);
  apiRoute.use("/roles", RolRoutes);
  apiRoute.use("/auth", AuthRoutes)
  router.use("/api", apiRoute);

  //Manejador de errores
  router.use((err,_req,_res,next) => {
    if(err instanceof ValidationError) {
      err.errors = err.errors.map(e => e.message);
      err.title = "Error de validación"
    }
    next(err);
  });

  //Formato error
  router.use((err,_req,res,_next) => {
    res.status(err.status || 500).json({
      title: err.title || "Server error",
      message: err.message,
      errors: err.errors
    })
  })

  return router;
};
