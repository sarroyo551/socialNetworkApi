const User = require('../models/user');
const Thought = require('../models/thought');
const express = require('express');
const router = express.Router();


//get all users
router.get('/', async (req, res) => { 
    try {
        const userData = await User.find().populate('thoughts').populate('friends');
        res.json(userData);
    }
    catch (err) { 
        res.status(500).json(err);
    }
});

//create user
router.post('/', async (req, res) => { 
    try {
        const userData = await User.create(
            req.body
        );
        res.json(userData);
    }
    catch (err) { 
        res.status(500).json(err);
    }
});

//get user by id
router.get('/:id', async (req, res) => { 
    try {
        const userData = await User.findById(req.params.id).populate('thoughts').populate('friends');
        res.json(userData);
    }
    catch (err) { 
        res.status(500).json(err);
    }
});

//delete user
router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.findByIdAndDelete(req.params.id);
        res.json(userData);
    }
    catch (err) { 
        res.status(500).json(err);
    }
})

//update user
router.put('/:id', async (req, res) => {
    //learn update for users and thoughts
})



module.exports = router;