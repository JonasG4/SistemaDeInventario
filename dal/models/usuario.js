"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
     Usuario.hasMany(models.Roles, {foreignKey: "id_rol"})   
    }
  }
  Usuario.init(
    {
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      apellido: DataTypes.STRING(25),
      email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          min: 8,
        },
      },
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "roles",
          key: "id_rol"
        }
      },
      estado: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        validate: {
          min: 0,
          max: 1,
        },
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      update_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      created_by: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "root"
      }
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
