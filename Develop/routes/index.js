const userRoutes = require('./users');
const thoughtRoutes = require('./thoughts');
const friendRoutes = require('./friends');
const reactionRoutes = require('./reactions');

const express = require('express'); 
const router = express.Router();

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/friends', friendRoutes);
router.use('/reactions', reactionRoutes);

module.exports = router;