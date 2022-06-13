const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
});

const Note = model('note', NoteSchema);

module.exports = Note;
