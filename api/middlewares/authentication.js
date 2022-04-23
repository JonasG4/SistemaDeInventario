const jwt = require("jsonwebtoken");

class AuthMiddleware {
  constructor({ config }) {
    this._config = config;
  }
          
  isAdmin(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token, this._config.secret, (err, decoded) => {
        if (err) {
          res.json({
            msg: "Token inválido",
          });
        } else {
          req.decoded = decoded;
          if(decoded.credenciales.rol === "SUPERADMIN"){
            next();
          }else{
              res.status(403).json({
                error: true,
                msg: "Tu acceso ha sido denegado"
              })
          }
        }
      });
    } else {
      res.json({
        msg: "Token no proporcionada",
      });
    }
  }

}
module.exports = AuthMiddleware;
