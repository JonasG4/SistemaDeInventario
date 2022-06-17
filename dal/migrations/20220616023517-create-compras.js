'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('compras', {
      id_compra: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_proveedor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "proveedores",
          key: "id_proveedor"
        }
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false
      },
      num_documento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_ing: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id_usuario"
        }
      },
      user_mod: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id_usuario"
        }
      },
      fecha_ingreso: {
        type: Sequelize.DATE,
        allowNull: false
      },
      fecha_mod: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      estado: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('compras');
  }
};