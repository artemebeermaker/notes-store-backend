const { Router } = require('express');
const Note = require('../../models/note');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const noteList = await Note.find();
        if (!noteList) {
            throw new Error('No Note List found');
        }

        res.status(200).json(noteList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const newNote = new Note(req.body);
    try {
        const note = await newNote.save();
        if (!note) {
            throw new Error('Something went wrong saving the Note')
        }

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const removed = await Note.findByIdAndDelete(id);
        if (!removed) {
            throw Error('Something went wrong ')
        }

        res.status(200).json(removed);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router;
