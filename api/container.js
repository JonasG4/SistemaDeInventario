const { asClass, createContainer, asFunction, asValue } = require("awilix");

// Startup
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");
const db = require("../dal/models");

// Routes
const Routes = require("../api/routes");
const UsuarioRoutes = require("../api/routes/usuarioRoutes");
const RolRoutes = require("../api/routes/rolRoutes");
const AuthRoutes = require("./routes/authRoutes")
const CategoriaRoutes = require('../api/routes/categoriaRoutes');
const ProductoRoutes = require('../api/routes/productoRoutes');
const PrecioRoutes = require('../api/routes/precioRoutes');
const ProveedorRoutes = require('../api/routes/proveedorRoutes');

// Controllers
const { UsuarioController, CategoriaController, ProductoController, PrecioController,RolController, AuthController,ProveedorController } = require("../api/controllers");

//MIDDLEWARES
// const { AuthMiddleware } = require("./middlewares");

//Validaciones
const { UsuarioValidation,CategoryValidation,ProductValidation,PriceValidation,ProveedorValidation } = require("./middlewares/validations");

// SERVICIOS
const { UsuarioService,CategoriaService, ProductoService, PrecioService,ProveedorService } = require("../services");

// REPOSITORIOS
const { UsuarioRepository,CategoriaRepository, ProductoRepository, PrecioRepository,ProveedorRepository } = require("../dal/repositories");

// BUSINESS
const { UsuarioBusiness,CategoriasBusiness, ProductoBusiness, PrecioBusiness,ProveedorBusiness } = require("../domain/");

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
    PrecioController: asClass(PrecioController).singleton(),
    RolController: asClass(RolController).singleton(),
    AuthController: asClass(AuthController).singleton(),
    ProveedorController: asClass(ProveedorController).singleton()
  })
  .register({
    //Registrar middlewares
    UsuarioValidation: asClass(UsuarioValidation).singleton(),
    CategoryValidation: asClass(CategoryValidation).singleton(),
    ProductValidation: asClass(ProductValidation).singleton(),
    PriceValidation: asClass(PriceValidation).singleton(),
    ProveedorValidation: asClass(ProveedorValidation).singleton()
  })
  .register({
    // Registrar rutas
    UsuarioRoutes: asFunction(UsuarioRoutes).singleton(),
    CategoriaRoutes: asFunction(CategoriaRoutes).singleton(),
    ProductoRoutes: asFunction(ProductoRoutes).singleton(),
    PrecioRoutes: asFunction(PrecioRoutes).singleton(),
    RolRoutes: asFunction(RolRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    ProveedorRoutes: asFunction(ProveedorRoutes).singleton()
  })
  .register({
    // Registrar repositorios
    UsuarioRepository: asClass(UsuarioRepository).singleton(),
    CategoriaRepository: asClass(CategoriaRepository).singleton(),
    ProductoRepository: asClass(ProductoRepository).singleton(),
    PrecioRepository: asClass(PrecioRepository).singleton(),
    ProveedorRepository: asClass(ProveedorRepository).singleton()
  })
  .register({
    // Registrar business
    UsuarioBusiness: asClass(UsuarioBusiness).singleton(),
    CategoriasBusiness: asClass(CategoriasBusiness).singleton(),
    ProductoBusiness: asClass(ProductoBusiness).singleton(),
    PrecioBusiness: asClass(PrecioBusiness).singleton(),
    ProveedorBusiness: asClass(ProveedorBusiness).singleton()
  })
  .register({
    // Registrar servicios
    UsuarioService: asClass(UsuarioService).singleton(),
    CategoriaService: asClass(CategoriaService).singleton(),
    ProductoService: asClass(ProductoService).singleton(),
    PrecioService: asClass(PrecioService).singleton(),
    ProveedorService: asClass(ProveedorService).singleton()
  });

module.exports = container;
