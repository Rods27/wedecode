const { User, Movie } = require('../database/models');

const userExists = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user && user.dataValues) {
    res.status(409).json({ message: 'User already registered' });
  } else {
    next();
  }
};

const movieExists = async (req, res, next) => {
  const { name } = req.body;
  const movie = await Movie.findOne({ where: { name } });
  if (movie && movie.dataValues) {
    res.status(409).json({ message: 'Movie already registered' });
  } else {
    next();
  }
};

module.exports = { userExists, movieExists };