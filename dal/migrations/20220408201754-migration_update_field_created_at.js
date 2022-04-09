'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('categorias', 'created_at', {
      defaultValue: Sequelize.fn('NOW'),
      allowNull: false,
      type: Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categorias');
  }
};
