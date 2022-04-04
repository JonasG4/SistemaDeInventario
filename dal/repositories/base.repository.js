class BaseRepository {
  constructor(db, entity) {
    this._db = db;
    this.entity = entity;
  }
  // general queries
  getAll() {
    return this._db[this.entity].findAll();
  }

  get(id) {
    return this._db[this.entity].findOne({ where: { id } });
  }

  create(entity) {
    return this._db[this.entity].create(entity);
  }

  update(id, entity) {
    delete entity.creadAt;
    delete entity.updatedAt;
    return this._db[this.entity].update(entity, { where: { id } });
  }
}

module.exports = BaseRepository;
