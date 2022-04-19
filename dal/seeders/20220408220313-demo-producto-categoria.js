'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('productos',[{
      nom_producto: "Ropero",
      tam_producto: "mediano",
      des_producto: "Ropero de madera de 2 puertas",
      cod_categoria: 5,
      created_at: new Date().toUTCString(),
      updated_at: new Date().toUTCString(),
    },
    {
      nom_producto: "Ropero",
      tam_producto: "grande",
      des_producto: "Ropero de madera de 5 puertas",
      cod_categoria: 5,
      created_at: new Date().toUTCString(),
      updated_at: new Date().toUTCString(),
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('productos', null, {});
  }
};
