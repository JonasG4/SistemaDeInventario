'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('det_compras', {
      id_det_compra: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_compra: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "compras",
          key: "id_compra"
        }
      },
      id_material: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "materiales",
          key: "id_material"
        }
      },
      precio: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
          min: 0.01
        }
      },
      estado: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('det_compras');
  }
};