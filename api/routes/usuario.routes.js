const { Router } = require("express");


module.exports = function({UsuarioController}){
    const router = Router();

    router.get('/', UsuarioController.getAll.bind(UsuarioController));


    return router;
};

