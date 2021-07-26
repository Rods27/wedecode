const express = require('express');
const { Movie, User } = require('../models');
const router = express.Router();

// Getting all movies

router.get('/getall', (_req, res) => {
  Movie.findAll()
  .then((movie) => res.status(200).json(movie))
  .catch((err) => {
    console.log(err)
  });
});

// Getting all movies with viewers

router.get('/getall/viewers', (req, res) => {
  Movie.findAll({
    attributes: { exclude: ['password'] },
    include: [{
      model: User, as: 'users',
      attributes: { exclude: ["createdAt", "updatedAt", "password"] },
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

// Creating a movie

router.post('/create', (req, res) => {
  const { name, description, year } = req.body;
  Movie.create({ 
    name,
    description,
    year,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
  .then((movie) => res.status(200).json(movie))
  .catch((err) => {
    console.log(err)
    res.status(500).send({ message: 'Something happened..'})
  });
});

// Getting a specific movie

router.get('/id/:id', (req, res) => {
  Movie.findByPk(req.params.id)
  .then((movie) => {
    if(movie === null) res.status(404).send({ message: 'Movie not Found.'})
    res.status(200).json(movie)
  })
  .catch((err) => {
    console.log(err)
  });
});

// Getting a specific movie and his viewers

router.get('/id/:id/viewers', (req, res) => {
  Movie.findByPk(req.params.id, {
    attributes: { exclude: ['password'] },
    include: [{
      model: User, as: 'users',
      attributes: { exclude: ["createdAt", "updatedAt", "password"] },
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