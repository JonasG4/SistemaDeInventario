const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const { ValidationError } = require("sequelize");

module.exports = function ({
  UsuarioRoutes,
  CategoriaRoutes,
  ProductoRoutes,
  PrecioRoutes,
  RolRoutes,
  AuthRoutes,
  ProveedorRoutes,
  MaterialRoutes,
  CompraRoutes,
  DetCompraRoutes,
}) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use(cors()).use(bodyParser.json()).use(compression());

  apiRoute.use('/categorias', CategoriaRoutes);
  apiRoute.use('/productos',ProductoRoutes);
  apiRoute.use('/precios', PrecioRoutes);
  apiRoute.use("/usuarios", UsuarioRoutes);
  apiRoute.use("/roles", RolRoutes);
  apiRoute.use("/auth", AuthRoutes);
  apiRoute.use('/proveedores', ProveedorRoutes);
  apiRoute.use('/materiales', MaterialRoutes);
  apiRoute.use('/compras', CompraRoutes);
  apiRoute.use('/detalle-compras', DetCompraRoutes);
  router.use("/api", apiRoute);
  router.use("/api", apiRoute);

  //Rutas principales
  apiRoute.use("/categorias", CategoriaRoutes);
  apiRoute.use("/productos", ProductoRoutes);
  apiRoute.use("/usuarios", UsuarioRoutes);
  apiRoute.use("/roles", RolRoutes);
  apiRoute.use("/auth", AuthRoutes);

  // Acceder a una ruta invalidad del servidor
  router.use((_req, _res, next) => {
    const err = new Error("El recurso no fue encontrado");
    err.title = "Recurso no encontrado";
    err.errors = ["El recurso no fue encontrado"];
    err.status = 404;
    return next(err);
  });

  //Agregar a XSRF-TOKEN cookie en desarollo
  apiRoute.get("/csrf/restore", (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    console.log("che si entra boludo");
    return res.status(201).json({});
  });

  //Manejador de errores
  router.use((err, _req, _res, next) => {
    //Verificar si existen errores en sequelize
    if (err instanceof ValidationError) {
      err.errors = err.errors.map((e) => e.message);
      err.title = "Error de Validación";
    }
    return next(err);
  });

  //Formato de error
  router.use((err, _req, res, _next) => {
    return res.status(err.status || 500).json({
      title: err.title || "Server Error chucha qliao",
      message: err.message,
      errors: err.errors,
    });
  });

  return router;
};
