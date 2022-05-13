const { Router } = require("express");

module.exports = function({AuthController}){
    const router = Router();

    router.get('/', AuthController.restoreUser.bind(AuthController));
    router.post('/login', AuthController.login.bind(AuthController));
    router.delete('/logout', )

    return router;
};

