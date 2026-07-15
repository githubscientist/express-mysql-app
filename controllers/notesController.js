const noteModel = require("../models/noteModel");

const notesController = {
    getAllNotes: async (request, response) => {
        try {
            const notes = await noteModel.getAllNotes();
            return response.status(200).json(notes);    
        } catch (e) {
            return response.status(500).json({ message: 'Error fetching all notes', error: error.message });
        }
    },
    createNote: async (request, response) => {
        try {
            const { title, description, tag } = request.body;

            const result = await noteModel.createNote(title, description, tag);

            response.status(201).json({ message: 'Note created successfully', data: result });   
        } catch (e) {
            return response.status(500).json({ message: 'Error creating note', error: error.message });
        }
    },
    getNoteById: async (request, response) => {
        try {
            const { id } = request.params;

            const note = await noteModel.getNoteById(id);

            if(!note) {
                return response.status(404).json({ message: 'Note not found' });
            }

            response.status(200).json(note);
        } catch (e) {
            response.status(500).json({ message: 'Error fetching note by ID', error: error.message });
        }
    }, 
    updateNote: async (request, response) => {
        try {
            const { id } = request.params;

            let { title, description, tag } = request.body;

            const result = await noteModel.updateNote(id, title, description, tag);

            response.status(200).json({ message: 'Note updated successfully', data: result });
        } catch (e) {
            response.status(500).json({ message: 'Error updating note', error: e.message });
        }
    },
    deleteNote: async (request, response) => {
        try {
            const { id } = request.params;

            const result = await noteModel.deleteNote(id);

            response.status(200).json({ message: 'Note deleted successfully', data: result });
        } catch (e) {
            response.status(500).json({ message: 'Error deleting note', error: e.message });
        }
    }
}

module.exports = notesController;