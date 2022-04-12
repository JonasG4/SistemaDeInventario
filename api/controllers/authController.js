const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AuthController{
    constructor({UsuarioService, config}){
        this._usuarioServices = UsuarioService
        this._config = config
    }

    async login(req, res){
        let {email, password } = req.body;
        await this._usuarioServices.getUsuarioByEmail(email).then(
            usuario => {
                console.log(usuario);
                if(!usuario){
                    res.status(404).json({
                        msg: "El correo electronico no está registrado"
                    })
                }else{

                    if(bcrypt.compareSync(password, usuario.password)){
                        let token = jwt.sign({usuario}, this._config.secret, {
                            expiresIn: this._config.expires
                        })
                        res.status(201).json({
                            usuario: usuario,
                            token: token
                        })
                    }else{
                        res.status(401).json({
                            msg: "La contraseña no coincide"
                        })
                    }
                }
           
                
            }
        )


    }
}

module.exports = AuthController;