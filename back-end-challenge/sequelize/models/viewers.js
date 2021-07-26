const Viewers = (sequelize, DataTypes) => {
  const viewer = sequelize.define('Viewers', {
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });

  viewer.associate = (models) => {
    models.Movie.belongsToMany(models.User,
      { as: 'users', through: viewer, foreignKey: 'movieId', otherKey: 'userId' });
    models.User.belongsToMany(models.Movie,
      { as: 'movies', through: viewer, foreignKey: 'userId', otherKey: 'movieId' });
  };
  return viewer;
};

module.exports = Viewers;