const express = require('express');
const { getAllNotes, createNote, getNoteById, updateNote, deleteNote } = require('../controllers/notesController');

const notesRouter = express.Router();

notesRouter.get('/', getAllNotes);
notesRouter.post('/', createNote);
notesRouter.get('/:id', getNoteById);
notesRouter.put('/:id', updateNote);
notesRouter.delete('/:id', deleteNote);

module.exports = notesRouter;