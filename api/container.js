const { asClass, createContainer, asFunction, asValue } = require("awilix");

// Startup
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");
const db = require("../dal/models");

// Routes
const Routes = require("../api/routes");
const UsuarioRoutes = require("../api/routes/usuario.routes");

// Controllers
const { UsuarioController } = require("../api/controllers");

// SERVICIOS
const { UsuarioService } = require("../services");

// REPOSITORIOS
const { UsuarioRepository } = require("../dal/repositories");

// BUSINESS
const { UsuarioBusiness } = require("../domain/");

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
  })
  .register({
    // Registrar rutas
    UsuarioRoutes: asFunction(UsuarioRoutes).singleton(),
  })
  .register({
    // Registrar repositorios
    UsuarioRepository: asClass(UsuarioRepository).singleton(),
  })
  .register({
    // Registrar business
    UsuarioBusiness: asClass(UsuarioBusiness).singleton(),
  })
  .register({
    // Registrar servicios
    UsuarioService: asClass(UsuarioService).singleton(),
  });

module.exports = container;
