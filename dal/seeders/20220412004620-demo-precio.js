'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('precios',[{
      product_id: 1,
      precio: 500.50
    },
    {
      product_id: 3,
      precio: 250
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('precios', null, {})
  }
};
