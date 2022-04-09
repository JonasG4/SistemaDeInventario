const { Router } = require("express");


module.exports = function({UsuarioController}){
    const router = Router();

    router.get('/', UsuarioController.getUsuarios.bind(UsuarioController));
    router.get('/:id', UsuarioController.getUsuario.bind(UsuarioController));
    router.post('/', UsuarioController.createUsuario.bind(UsuarioController));
    router.put('/:id', UsuarioController.updateUsuario.bind(UsuarioController));
    router.delete('/:id', UsuarioController.deleteUsuario.bind(UsuarioController));

    return router;
};

