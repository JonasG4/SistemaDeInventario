const mapper = require('automapper-js');
const {RolDto} = require('../dtos');

class RolController {
    constructor({}){
        // this._rolService = RolService;
    }

    async getRoles(req, res){
        let roles = await this._rolService.getAll();
        roles = roles.map((rol) => mapper(RolDto, rol));
        return res.send({
            error: false,
            msg: roles
        })
    }

    async getRol(req, res){
        const { id } = req.params;
        let rol = await this._rolService.get(id);
        
        if(!rol){
            res.status(404).send();
        }
    }

    async createRol(req, res){
        const {body} = req;
        const createRole = await this._rolService.create(body);

        return res.status(201).send({
            error: false,
            msg: "Rol creado con exito"
        })
    }

    async updateRol(req, res){
        const {id} = req.params;
        const {body} = req;
        await this._rolService.update(id, body);

        return res.status(204).send({
            error: false,
            msg: "El rol ha sido creado con éxito"
        })
    }

    async deleteRol(req, res){
        const {id} = req.params;
        
        await this._rolService.delete(id);

        return res.status(206).send({
            error: false,
            msg: "Se ha eliminado correctamente el rol"
        })
    }
}

module.exports = RolController;