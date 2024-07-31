const express = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');

const router = express.Router();

// Google Auth
router.get('/google', userController.googleAuth);
router.get('/google/callback', userController.googleCallback);

// Facebook Auth
router.get('/facebook', userController.facebookAuth);
router.get('/facebook/callback', userController.facebookCallback);

module.exports = router;
