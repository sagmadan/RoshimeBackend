const express = require('express');
const { getMemories } = require('../controllers/memoryController');
const router = express.Router();

router.get('/', getMemories);

module.exports = router;
