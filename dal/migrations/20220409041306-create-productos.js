'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom_producto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tam_producto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      des_producto: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      cod_categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "categorias",
          key: "id"
        }
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productos');
  }
};