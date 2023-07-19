const Thought = require('../models/thought');
const User = require('../models/user');
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
        const userCollection = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: thoughtData._id } },
            { new: true }
        )
        res.json({thoughtData, userCollection});
    }
    catch (err) { 
        // console.log(err)
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
    try {
        const thoughtData = await Thought.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(thoughtData);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;