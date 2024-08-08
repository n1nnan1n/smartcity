const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const cors = require('cors');
// const googleAuth = require('./config/googleAuth');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const fileRoutes = require('./routes/fileRoutes');

const app = express();

app.use(cors());
// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoURI = process.env.MONGO_URI || 'mongodb+srv://thanincwtnk:thaninboy4@smartcity.5sxkzfv.mongodb.net/smartcity?retryWrites=true&w=majority&appName=smartcity';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true , serverSelectionTimeoutMS: 5000 , socketTimeoutMS: 45000  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Database connection error:', err));

// Session setup
app.use(session({
  secret: 'nafkjhb;',
  resave: false,
  saveUninitialized: true
}));

// Passport setup
app.use(passport.initialize());
app.use(passport.session());

// googleAuth(passport);

// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/file', fileRoutes);

module.exports = app;
