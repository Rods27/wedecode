const express = require('express');
const { Viewers } = require('../models');
const router = express.Router();

// Adding a viewer into a movie

router.post('/create', (req, res) => {
  const { userId, movieId } = req.body;
  Viewers.create({ userId, movieId })
  .then((user) => res.status(201).json(user))
  .catch((err) => {
    console.log(err)
    res.status(500).send({ message: 'Something happened..'})
  });
});

module.exports = router;