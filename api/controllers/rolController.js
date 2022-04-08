import mapper from ('automapper-js');
import {RolDto} from '../dtos'

class RolController {
    constructor({RolService}){
        this._rolService = RolService;
    }

    async getRoles(req, res){
        let roles = await this._rolService.getAll();
        roles = roles.map((rol) => mapper(RolDto, rol));
    }
}