const Thought = require('../models/thought');
const express = require('express');
const router = express.Router();
//get all thoughts
router.get('/', async (req, res) => { 
    try {
        const thoughtData = await Thought.find();
        res.json(thoughtData);
    }
    catch (err) { 
        res.status(500).json(err);
    }
})
//addThought
router.post('/', async (req, res) => {
    try {
        const thoughtData = await Thought.create(
            req.body
        );
        res.json(thoughtData);
    }
    catch (err) { 
        res.status(500).json(err);
    }
}) 

//get Thought By Id
router.get('/:id', async (req, res) => {
    try {
        const thoughtData = await Thought.findById(req.params.id);
        res.json(thoughtData);
    }
    catch (err) { 
        res.status(500).json(err);
    }
})

//delete Thought
router.delete('/:id', async (req, res) => {
    try {
        const thoughtData = await Thought.findByIdAndDelete(req.params.id);
        res.json(thoughtData);
    }
    catch (err) { 
        res.status(500).json(err);
    }
})

//update Thought
router.put('/:id', async (req, res) => {
    //learn update for thoughts and users
})

module.exports = router;