const bcrypt = require("bcrypt");
const { json } = require("body-parser");
const jwt = require("jsonwebtoken");

class AuthController {
  constructor({ UsuarioService, config }) {
    this._usuarioServices = UsuarioService;
    this._config = config;
  }

  async login(req, res) {
    let { email, password } = req.body;
    const isProduction = this._config.ENVIRONMENT === "PRODUCTION";

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
          
          res.cookie("token", token, {
            maxAge: 500000,
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction && "Lax",
          });

          res.status(201).json({
            error: false,
            token: token,
            usuario: usuario,
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

  async restoreUser(req, res, next) {
    const { token } = req.cookies;

    return jwt.verify(
      token,
      this._config.secret,
      null,
      async (err, jwtPayload) => {
        if (err) {
          return next();
        }

        try {
          const { email } = jwtPayload.credenciales;
          req.usuario = await this._usuarioServices.getUsuarioByEmail(email);
        } catch (e) {
          res.clearCookie("token");
          return next();
        }

        if (!req.usuario) res.clearCookie("token");

        return next();
      });
  };

  logout(_req, res) {
    res.clearCookie("token");
    return res.status(200).json({ msg: "success" });
  }
}

module.exports = AuthController;
