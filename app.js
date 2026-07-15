// import express
const express = require('express');
const notesRouter = require('./routes/notesRouter');

// create express app
const app = express();

// parse the request body as JSON
app.use(express.json());

// setup the routes
app.use('/notes', notesRouter);

// export the app
module.exports = app;