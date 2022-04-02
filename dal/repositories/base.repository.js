class BaseRepository {
  constructor(db, entity) {
    this._db = db;
    this.entity = entity;
  }

  getAll() {
    return this._db[this.entity].findAll();
  }

  get(id) {
    return this._db[this.entity].findOne({ where: { id } });
  }
  
  create(entity){
    
  }

  

}

module.exports = BaseRepository;
