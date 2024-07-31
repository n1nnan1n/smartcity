const express = require('express');
const session = require('express-session');
const passport = require('passport');
const googleAuth = require('./config/googleAuth');
const facebookAuth = require('./config/facebookAuth');
const authRoutes = require('./routes/authRoutes');
const userController = require('./controllers/userController');

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Passport setup
app.use(passport.initialize());
app.use(passport.session());

googleAuth(passport);
facebookAuth(passport);

// Routes
app.use('/auth', authRoutes);
app.post('/login', userController.loginUser);

module.exports = app;
