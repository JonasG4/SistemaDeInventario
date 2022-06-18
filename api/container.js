const { asClass, createContainer, asFunction, asValue } = require("awilix");

// STARTUP
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");
const db = require("../dal/models");

// ROUTES
const Routes = require("../api/routes");
const UsuarioRoutes = require("../api/routes/usuarioRoutes");
const RolRoutes = require("../api/routes/rolRoutes");
const AuthRoutes = require("./routes/authRoutes")
const CategoriaRoutes = require('../api/routes/categoriaRoutes');
const ProductoRoutes = require('../api/routes/productoRoutes');
const PrecioRoutes = require('../api/routes/precioRoutes');
const ProveedorRoutes = require('../api/routes/proveedorRoutes');
const MaterialRoutes = require('../api/routes/materialRoutes');
const CompraRoutes = require('../api/routes/compraRoutes');
const DetCompraRoutes = require('../api/routes/detCompraRoutes');
const UnidadRoutes = require('../api/routes/unidadRoutes');

// Controllers
const { UsuarioController, CategoriaController, ProductoController, PrecioController,RolController, AuthController,ProveedorController,MaterialController,CompraController,DetCompraController, UnidadController } = require("../api/controllers");

//MIDDLEWARES
// const { AuthMiddleware } = require("./middlewares");

//Validaciones
const { UsuarioValidation,CategoryValidation,ProductValidation,PriceValidation,ProveedorValidation } = require("./middlewares/validations");

// SERVICIOS
const { UsuarioService,CategoriaService, ProductoService, PrecioService,ProveedorService,MaterialService,CompraService,DetCompraService, UnidadService } = require("../services");

// REPOSITORIOS
const { UsuarioRepository,CategoriaRepository, ProductoRepository, PrecioRepository,ProveedorRepository,MaterialRepository,CompraRepository,DetCompraRepository, UnidadesRepositoty } = require("../dal/repositories");

// BUSINESS
const { UsuarioBusiness,CategoriasBusiness, ProductoBusiness, PrecioBusiness,ProveedorBusiness,MaterialBusiness,CompraBusiness,DetCompraBusiness,UnidadBusiness } = require("../domain/");


////MIDDLEWARES
const { AuthMiddleware } = require("./middlewares");


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
    ProveedorController: asClass(ProveedorController).singleton(),
    MaterialController: asClass(MaterialController).singleton(),
    CompraController: asClass(CompraController).singleton(),
    DetCompraController: asClass(DetCompraController).singleton(),
    UnidadController: asClass(UnidadController).singleton(),
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
    //Registrar middlwares
    AuthMiddleware: asClass(AuthMiddleware).singleton(),
    UsuarioValidation: asClass(UsuarioValidation).singleton()
  })
  .register({
    // Registrar rutas
    UsuarioRoutes: asFunction(UsuarioRoutes).singleton(),
    CategoriaRoutes: asFunction(CategoriaRoutes).singleton(),
    ProductoRoutes: asFunction(ProductoRoutes).singleton(),
    PrecioRoutes: asFunction(PrecioRoutes).singleton(),
    RolRoutes: asFunction(RolRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    ProveedorRoutes: asFunction(ProveedorRoutes).singleton(),
    MaterialRoutes: asFunction(MaterialRoutes).singleton(),
    CompraRoutes: asFunction(CompraRoutes).singleton(),
    DetCompraRoutes: asFunction(DetCompraRoutes).singleton(),
    UnidadRoutes: asFunction(UnidadRoutes).singleton()
  })
  .register({
    // Registrar repositorios
    UsuarioRepository: asClass(UsuarioRepository).singleton(),
    CategoriaRepository: asClass(CategoriaRepository).singleton(),
    ProductoRepository: asClass(ProductoRepository).singleton(),
    PrecioRepository: asClass(PrecioRepository).singleton(),
    ProveedorRepository: asClass(ProveedorRepository).singleton(),
    MaterialRepository: asClass(MaterialRepository).singleton(),
    CompraRepository: asClass(CompraRepository).singleton(),
    DetCompraRepository: asClass(DetCompraRepository).singleton(),
    UnidadesRepositoty: asClass(UnidadesRepositoty).singleton()
  })
  .register({
    // Registrar business
    UsuarioBusiness: asClass(UsuarioBusiness).singleton(),
    CategoriasBusiness: asClass(CategoriasBusiness).singleton(),
    ProductoBusiness: asClass(ProductoBusiness).singleton(),
    PrecioBusiness: asClass(PrecioBusiness).singleton(),
    ProveedorBusiness: asClass(ProveedorBusiness).singleton(),
    MaterialBusiness: asClass(MaterialBusiness).singleton(),
    CompraBusiness: asClass(CompraBusiness).singleton(),
    DetCompraBusiness: asClass(DetCompraBusiness).singleton(),
    UnidadBusiness: asClass(UnidadBusiness).singleton()
  })
  .register({
    // Registrar servicios
    UsuarioService: asClass(UsuarioService).singleton(),
    CategoriaService: asClass(CategoriaService).singleton(),
    ProductoService: asClass(ProductoService).singleton(),
    PrecioService: asClass(PrecioService).singleton(),
    ProveedorService: asClass(ProveedorService).singleton(),
    MaterialService: asClass(MaterialService).singleton(),
    CompraService: asClass(CompraService).singleton(),
    DetCompraService: asClass(DetCompraService).singleton(),
    UnidadService: asClass(UnidadService).singleton()
  });

module.exports = container;
