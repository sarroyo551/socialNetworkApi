const express = require('express');
const router = express.Router();

//create reaction
router.post('/:thoughtId', async (req, res) => {
    try {
        const reactionData = await Reaction.create(
            { thoughtId: req.params.thoughtId, ...req.body }
        );
        res.json(reactionData);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

//delete reaction
router.delete('/:thoughtId/:reactionId', async (req, res) => {
    try {
        const reactionData = await Reaction.findOneAndDelete(
            { thoughtId: req.params.thoughtId, _id: req.params.reactionId }
        );
        res.json(reactionData);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;