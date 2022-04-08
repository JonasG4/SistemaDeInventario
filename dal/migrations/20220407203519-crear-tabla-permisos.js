'use strict';

module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.createTable('permisos', { 
      id_permiso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('permisos');
  }
};
