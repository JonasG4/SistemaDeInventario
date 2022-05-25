'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Compras.hasOne(models.Usuario, {
        foreignKey: "id_usuario"
      })
      Compras.belongsTo(models.Proveedores, {
        foreignKey: "id_proveedor"
      })
    }
  }
  Compras.init({
    id_compra: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    num_documento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_ing: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_mod: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_ingreso: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_mod: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    }
  }, {
    sequelize,
    modelName: 'Compras',
  });
  return Compras;
};