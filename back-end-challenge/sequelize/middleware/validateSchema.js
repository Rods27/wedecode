const { userSchema } = require('../schema/userSchema');
const { movieSchema } = require('../schema/movieSchema');
const { userExists, movieExists } = require('./validations');

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

module.exports = { validateUserRegister, validateMovieRegister };