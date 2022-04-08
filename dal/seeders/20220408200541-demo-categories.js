'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias',[{
      nombre: "Mesas",
      descripcion: "Mesas de madera",
      created_at: new Date().toUTCString()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
