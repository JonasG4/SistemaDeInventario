'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('productos',[{
      nom_producto: "Ropero",
      tam_producto: "mediano",
      des_producto: "Ropero de madera de 2 puertas",
      cod_categoria: 5
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
