'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class materia_prima extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  materia_prima.init({
    id_material_prima: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    min_stock: DataTypes.INTEGER,
    fecha_ing: DataTypes.DATE,
    fecha_mod: DataTypes.DATE,
    user_ing: DataTypes.INTEGER,
    user_mod: DataTypes.INTEGER,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'materia_prima',
  });
  return materia_prima;
};