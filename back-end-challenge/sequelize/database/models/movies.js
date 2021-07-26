const Movies = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(700),
    year: DataTypes.STRING,
  },
  );
  return Movie;
}

module.exports = Movies;