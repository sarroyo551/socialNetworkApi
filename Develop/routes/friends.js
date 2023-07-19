const express = require('express');
const router = express.Router();

//create friend
router.post('/:userId/:friendId', async (req, res) => {
    try {
        const friendData = await Friend.create(
            { userId: req.params.userId, friendId: req.params.friendId }
        );
        res.json(friendData);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

//delete friend
router.delete('/:userId/:friendId', async (req, res) => {
    try {
        const friendData = await Friend.findOneAndDelete(
            { userId: req.params.userId, friendId: req.params.friendId }
        );
        res.json(friendData);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
