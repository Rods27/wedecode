module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Viewers',
      [{
        userId: 1,
        movieId: 1,
      },
      {
        userId: 1,
        movieId: 2,
      },
      {
        userId: 1,
        movieId: 3,
      },
      {
        userId: 3,
        movieId: 1,
      },
      {
        userId: 3,
        movieId: 2,
      },
      {
        userId: 2,
        movieId: 4,
      }
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};