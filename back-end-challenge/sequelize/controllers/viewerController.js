const express = require('express');
const { Viewers } = require('../database/models');
const { validateViewerSchema } = require('../middleware/validateSchema');
const router = express.Router();

// Adding a viewer into a movie

router.post('/create', validateViewerSchema, (req, res) => {
  const { userId, movieId } = req.body;
  Viewers.create({ userId, movieId })
  .then((viewer) => { res.status(201).json(viewer)})
  .catch((err) => {
    console.log(err)
    res.status(500).send({ message: 'Something happened..'})
  });
});

module.exports = router;