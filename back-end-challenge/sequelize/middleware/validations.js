const { User, Movie, Viewers } = require('../database/models');
const { Op } = require('sequelize');

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

const viewerExists = async (req, res, next) => {
  const { userId, movieId } = req.body;
  const viewer = await Viewers.findOne(
    { where: { 
      [Op.and]: [{ userId }, {movieId} ] } 
    }
  );
  if (viewer && viewer.dataValues) {
    res.status(409).json({ message: 'This movie already have this viewer' });
  } else {
    next();
  }
};

module.exports = { userExists, movieExists, viewerExists };