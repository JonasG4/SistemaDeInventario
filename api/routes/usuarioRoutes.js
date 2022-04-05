const { Router } = require("express");


module.exports = function({UsuarioController}){
    const router = Router();

    router.get('/', UsuarioController.getUsuarios.bind(UsuarioController));
    router.get('/:id', UsuarioController.getUsuario.bind(UsuarioController));
    router.post('/', UsuarioController.crearUsuario.bind(UsuarioController));
    router.put('/:id', UsuarioController.modificarUsuario.bind(UsuarioController));
    router.delete('/:id', UsuarioController.borrarUsuario.bind(UsuarioController));

    return router;
};

