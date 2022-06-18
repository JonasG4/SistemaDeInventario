'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_materia_prima extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tipo_materia_prima.init({
    id_tipo: DataTypes.INTEGER,
    id_materia_prima: DataTypes.INTEGER,
    nombre_tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipo_materia_prima',
  });
  return tipo_materia_prima;
};