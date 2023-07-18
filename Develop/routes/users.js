const User = require('../models/user');
const Thought = require('../models/thought');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => { 
    try {
        const userData = await User.find().populate('thoughts').populate('friends');
        res.json(userData);
    }
    catch (err) { 
        res.status(500).json(err);
    }
});

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

router.get('/:id', async (req, res) => { 
    try {
        const userData = await User.findById(req.params.id).populate('thoughts').populate('friends');
        res.json(userData);
    }
    catch (err) { 
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.findByIdAndDelete(req.params.id);
        res.json(userData);
    }
    catch (err) { 
        res.status(500).json(err);
    }
})

router.put('/:id', async (req, res) => {
    
})



module.exports = router;