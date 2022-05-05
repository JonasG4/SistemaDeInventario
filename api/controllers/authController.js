const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
  constructor({ UsuarioService, config }) {
    this._usuarioServices = UsuarioService;
    this._config = config;
  }
  
  async login(req, res) {
    let { email, password } = req.body;
    const isProduction = this._config.ENVIRONMENT === 'PRODUCTION'
    await this._usuarioServices.getUsuarioByEmail(email).then((usuario) => {
      if (!usuario) {
        res.status(404).json({
          error: true,
          
          msg: "El correo electrónico no está registrado",
        });
      } else {
        if (bcrypt.compareSync(password, usuario.password)) {
          let credenciales = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email: usuario.email,
            rol: usuario.Role.nombre,
          };

          let token = jwt.sign({ credenciales }, this._config.secret, {
            expiresIn: this._config.expires,
          });
          
          res.cookie('token', token, {
            maxAge: parseInt(this._config.expires) * 1000,
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction && "Lax"
          })

          res.status(201).json({
            error: false,
            token: token,
          });
        } else {
          res.status(401).json({
            error: true,
            msg: "El correo electrónico o la contraseña son incorrectos",
          });
        }
      }
    });
  }
}

module.exports = AuthController;
