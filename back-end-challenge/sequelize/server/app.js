// Server configurations

const express = require('express');

const app = express();

app.use(express.json());

const moviesController = require('../controllers/moviesController');
const usersController = require('../controllers/usersController');
const viewerController = require('../controllers/viewerController');

app.use('/movies', moviesController);
app.use('/users', usersController);
app.use('/viewers', viewerController);

// if any route above wasn't typed
app.all('*', (_req, res) => res.status(404).json({ message: 'This route does not exist.' }));

module.exports = app;
