module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Movies',
      [{
        id: 1,
        name: 'Click',
        year: '2006',
        description: (
        'A married architect with children is increasingly frustrated with spending most of his time working. '
        +'One day, he meets an eccentric inventor who gives him a universal remote with the ability to speed up time. '
        +'At first, he uses the device to speed up any dull moment, '
        +'but he realizes that he is speeding up time too much and letting precious family moments live. '
        +'Desperate, he turns to the inventor to help him reverse what he did.'
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Anger Management',
        year: '2003',
        description: (
        `Dave Buznik is generally a quiet guy who doesn't like confrontations. `
        +'But after a fight on board a plane, he has to see a therapist to control his aggression and visits'
        +'Dr. Buddy Rydell, who could use some of his own therapy.'
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Down to Earth',
        year: '2001',
        description: (
          'When amateur comedian Lance Barton hits the sky, '
          +'he discovers he died by mistake and demands to come back to life. '
          +'A celestial agent places him in the body of a wealthy Manhattan tycoon, '
          +'who has just been murdered by his wife.'
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { id: 4,
        name: 'Lion King',
        year: '2019',
        description: ('Betrayed and exiled from his kingdom, '
          +'the little lion Simba must figure out how to grow up and retake his destiny'
          +'royal heir on the plains of the African savannah.'
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};