"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Permisos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Permisos.init(
    {
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Permisos",
    }
  );
  return Permisos;
};
