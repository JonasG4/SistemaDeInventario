"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    static associate(models) {
      Roles.belongsTo(models.Rol_permisos, {
        foreignKey: "id_rol",
      });

      Roles.hasMany(models.Usuario, {
        foreignKey: "id_usuario"
      });

    }
  }
  Roles.init(
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
      modelName: "Roles",
    }
  );
  return Roles;
};
