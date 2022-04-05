"use strict";
const { Model } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
  class Rol_permisos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rol_permisos.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Roles,
          key: id_rol,
        },
      },
      id_permiso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Permisos,
          key: id_permiso
        }
      }
    },
    {
      sequelize,
      modelName: "Rol_permisos",
    }
  );
  return Rol_permisos;
};
