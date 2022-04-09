const { Router } = require("express");


module.exports = function({AuthController}){
    const router = Router();

    router.post('/login', AuthController.login.bind(AuthController));

    return router;
};

