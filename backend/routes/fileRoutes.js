const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
// File upload route
router.post('/upload', fileController.uploadFile);
router.get('/image/:filename', fileController.getFile);
// File retrieval route
// router.get('/:filename', retrieveFile);

module.exports = router;
