const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const passport = require('passport');
const User = require('../models/user'); // Adjust this path as per your project structure
const { JWT_SECRET } = process.env;

const userController = {
  registerUser: async (req, res) => {
    // Implement registration logic here
  },
  getUser: async (req, res) => {
    // Implement get user logic here
  },
  updateUser: async (req, res) => {
    // Implement update user logic here
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      if (user.password) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          if (user.emailVerified) {
            const token = jwt.sign({ userId: user._id, fname: user.fname, nname: user.nname, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({ token });
          } else {
            const token = crypto.randomBytes(20).toString('hex');
            user.emailVerificationToken = token;
            user.emailVerificationExpires = Date.now() + 3600000;
            user.resetPasswordToken = token;
            user.resetPasswordExpires = Date.now() + 3600000; // Token valid for 1 hour
            await user.save();
            await userController.sendVerificationEmail(user.email, token); // Correctly reference sendVerificationEmail
            return res.status(401).json({ error: 'Email not verified. Verification email sent.' });
          }
        } else {
          return res.status(401).json({ error: 'Invalid email or password' });
        }
      } else {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  sendVerificationEmail: async (email, token) => {
    // Implement email sending logic here
  }
};

// Google Sign-In
userController.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

userController.googleCallback = (req, res) => {
  passport.authenticate('google', { failureRedirect: '/' }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Google sign-in failed' });
    }
    const token = jwt.sign({ userId: user._id, fname: user.fname, nname: user.nname, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  })(req, res);
};

// Facebook Sign-In
userController.facebookAuth = passport.authenticate('facebook', { scope: ['email'] });

userController.facebookCallback = (req, res) => {
  passport.authenticate('facebook', { failureRedirect: '/' }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Facebook sign-in failed' });
    }
    const token = jwt.sign({ userId: user._id, fname: user.fname, nname: user.nname, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  })(req, res);
};

module.exports = userController;
