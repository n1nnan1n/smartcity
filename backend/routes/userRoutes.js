const express = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');

const router = express.Router();

// Google Auth
router.post('/login', userController.loginUser);
router.post('/register', userController.registerUser);
router.get('/getuser', userController.getUser);

module.exports = router;
