module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        name: 'Rodrigo Leite',
        email: 'rods.leite27@gmailcom',
        password: '1234567',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Gustavo Rocha Dias',
        email: 'gust.rocha@gmail.com',
        password: '1234567',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:3,
        name: 'Adam Sandler',
        email: 'ars66@gmail.com',
        password: '1234567',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};