const express = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');

const router = express.Router();

// Google Auth
router.get('/google', userController.googleAuth);
router.get('/google/callback', userController.googleCallback);

module.exports = router;
