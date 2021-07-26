const express = require('express');
const { User, Movie } = require('../models');
const router = express.Router();

// Getting all viewers

router.get('/getall', (_req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
  })
  .then((user) => res.status(200).json(user))
  .catch((err) => {
    console.log(err)
  });
});

// Getting all viewers and his movies

router.get('/getall/movies', (_req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
    include: [{
      model: Movie, as: 'movies',
      attributes: { exclude: ["year", "description", "createdAt", "updatedAt"] },
      required: false,
      through: {
        attributes: []
      }
    }]
  })
  .then((user) => res.status(200).json(user))
  .catch((err) => {
    console.log(err)
  });
});

// Creating a viewer

router.post('/create', (req, res) => {
  const { name, email, password } = req.body;
  User.create({ name, email, password })
  .then((user) => {
    const { password: _, ...UserWithoutPassword } = user.dataValues;
    res.status(201).json(UserWithoutPassword)
  })
  .catch((err) => {
    console.log(err)
    res.status(500).send({ message: 'Something happened..'})
  });
});

// Getting a specific User

router.get('/id/:id', (req, res) => {
  User.findByPk(req.params.id)
  .then((user) => {
    if(user === null) res.status(404).send({ message: 'Movie not Found.'})
    res.status(200).json(user)
  })
  .catch((err) => {
    console.log(err)
  });
});

// Getting a specific User and his movies

router.get('/id/:id/movies', (req, res) => {
  User.findByPk(req.params.id, {
    attributes: { exclude: ['password'] },
    include: [{
      model: Movie, as: 'movies',
      attributes: { exclude: ["year", "description", "createdAt", "updatedAt"] },
      required: false,
      through: {
        attributes: []
      }
    }]
  })
  .then((user) => res.status(200).json(user))
  .catch((err) => {
    console.log(err)
  });
});

module.exports = router;