"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      //Relacionar tablas
      //Un usuario solo puede tener un rol
      Usuario.belongsTo(models.Roles, {
        foreignKey: "id_rol",
      });
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
        validate: {
          isAlpha: {
            args: true,
            msg: "El nombre no puede contener números."
          }
        }
      },
      apellido: DataTypes.STRING(25),
      email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: "che pibe escribi bien el correo, va?"
          },
        },
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: {
            args: [8,255],
            msg: "La contraseña debe tener un minimo de 8 carácteres"
          }
        },
      },
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
      },
      created_by: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "root",
      },
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
