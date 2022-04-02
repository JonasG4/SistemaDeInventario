class BaseRepository {
    constructor(db, entity){
        this._db = db;
        this.entity = entity;
    }

    getAll(){
        return this._db[this.entity].findAll();
    }

    
}

module.exports = BaseRepository