const {asClass, createContainer, asFunction, asValue} = require('awilix');
const StartUp = require('./startup');
const Server = require('./server');

const config = require("../config/environments");

const UsuarioRoutes = require("../api/routes/usuario.routes")
const {UsuarioController} = require("../api/controllers")
const {UsuarioService} = require("../services")
const {UsuarioRepository} = require("../dal/repositories")
const {UsuarioBusiness} = require("../domain/")

const Routes = require("../api/routes")
const db = require("../dal/models")

const container = createContainer();

container.register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton()
})
.register({
    config: asValue(config)
})
.register({
    db: asValue(db)
})
.register({
    UsuarioController: asClass(UsuarioController).singleton()
})
.register({
    UsuarioRoutes: asFunction(UsuarioRoutes).singleton()
})
.register({
    UsuarioRepository: asClass(UsuarioRepository).singleton(),
    UsuarioService: asClass(UsuarioService).singleton(),
    UsuarioBusiness: asClass(UsuarioBusiness).singleton()
})




module.exports = container;