const express = require('express');
const { getMemories, updateReaction, addComment } = require('../controllers/memoryController');
const router = express.Router();

router.get('/', getMemories);
router.post('/reaction', updateReaction); // API to update reaction
router.post('/comment', addComment);      // API to add a new comment

module.exports = router;
