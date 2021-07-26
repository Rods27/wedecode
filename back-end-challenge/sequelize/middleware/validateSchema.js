const { userSchema } = require('../schema/userSchema');
const { movieSchema } = require('../schema/movieSchema');
const { viewerSchema } = require('../schema/viewerSchema');
const { userExists, movieExists, viewerExists } = require('./validations');

const validateUserRegister = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    await userSchema.validate({ name, email, password });
    await userExists(req, res, next);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const validateMovieRegister = async (req, res, next) => {
  try {
    const { name, description, year } = req.body;
    await movieSchema.validate({ name, description, year });
    await movieExists(req, res, next);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const validateViewerSchema = async (req, res, next) => {
  try {
    const { userId, movieId } = req.body;
    await viewerSchema.validate({ userId, movieId });
    await viewerExists(req, res, next);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = { validateUserRegister, validateMovieRegister, validateViewerSchema };