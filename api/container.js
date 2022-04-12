const { asClass, createContainer, asFunction, asValue } = require("awilix");

// Startup
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");
const db = require("../dal/models");

// Routes
const Routes = require("../api/routes");
const UsuarioRoutes = require("../api/routes/usuarioRoutes");
const CategoriaRoutes = require('../api/routes/categoriaRoutes');
const ProductoRoutes = require('../api/routes/productoRoutes');
const PrecioRoutes = require('../api/routes/precioRoutes');

// Controllers
const { UsuarioController, CategoriaController, ProductoController, PrecioController } = require("../api/controllers");

// SERVICIOS
const { UsuarioService,CategoriaService, ProductoService, PrecioService } = require("../services");

// REPOSITORIOS
const { UsuarioRepository,CategoriaRepository, ProductoRepository, PrecioRepository } = require("../dal/repositories");

// BUSINESS
const { UsuarioBusiness,CategoriasBusiness, ProductoBusiness, PrecioBusiness } = require("../domain/");

const container = createContainer();
//registra todo los servicios a utilizar 
container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
  })
  .register({
    config: asValue(config),
  })
  .register({
    db: asValue(db),
  })
  .register({
    // Registrar controllers
    UsuarioController: asClass(UsuarioController).singleton(),
    CategoriaController: asClass(CategoriaController).singleton(),
    ProductoController: asClass(ProductoController).singleton(),
    PrecioController: asClass(PrecioController).singleton()
  })
  .register({
    // Registrar rutas
    UsuarioRoutes: asFunction(UsuarioRoutes).singleton(),
    CategoriaRoutes: asFunction(CategoriaRoutes).singleton(),
    ProductoRoutes: asFunction(ProductoRoutes).singleton(),
    PrecioRoutes: asFunction(PrecioRoutes).singleton()
  })
  .register({
    // Registrar repositorios
    UsuarioRepository: asClass(UsuarioRepository).singleton(),
    CategoriaRepository: asClass(CategoriaRepository).singleton(),
    ProductoRepository: asClass(ProductoRepository).singleton(),
    PrecioRepository: asClass(PrecioRepository).singleton(),
  })
  .register({
    // Registrar business
    UsuarioBusiness: asClass(UsuarioBusiness).singleton(),
    CategoriasBusiness: asClass(CategoriasBusiness).singleton(),
    ProductoBusiness: asClass(ProductoBusiness).singleton(),
    PrecioBusiness: asClass(PrecioBusiness).singleton()
  })
  .register({
    // Registrar servicios
    UsuarioService: asClass(UsuarioService).singleton(),
    CategoriaService: asClass(CategoriaService).singleton(),
    ProductoService: asClass(ProductoService).singleton(),
    PrecioService: asClass(PrecioService).singleton()
  });

module.exports = container;
