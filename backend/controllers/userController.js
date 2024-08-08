const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const passport = require('passport');
const User = require('../models/userModel'); // Adjust this path as per your project structure
const { JWT_SECRET } = process.env;

const userController = {
  registerUser: async (req, res) => {
    const { fname , lname , phone , email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ error: 'User already exists' });
      }
      const newUser = new User({
        fname,
        lname,
        phone,
        email,
        password,
        emailVerified: false
      });
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const updates = req.body;
      const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
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
            const token = jwt.sign({ userId: user._id, name: user.name, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
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
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'yourEmail@gmail.com',
        pass: 'yourPassword'
      }
    });

    const mailOptions = {
      from: 'yourEmail@gmail.com',
      to: email,
      subject: 'Verify Your Email',
      text: `Please verify your email by clicking on this link: http://yourdomain.com/verify-email?token=${token}`
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Verification email sent');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  },

  // Google Sign-In
  googleAuth: passport.authenticate('google', { scope: ['profile', 'email'] }),

  googleCallback: (req, res, next) => {
    passport.authenticate('google', async (err, profile) => {
      if (err) {
        console.error('Google authentication error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!profile) {
        return res.status(401).json({ error: 'Google sign-in failed' });
      }

      try {
        // Find or create a user based on Google profile 
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // Create a new user
          user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            emailVerified: true,
            role: "user"
            // You can set additional fields here as needed
          });

          await user.save();
        }

        // Generate JWT token
        const token = jwt.sign(
          { userId: user._id, name: user.name, role: user.role },
          JWT_SECRET,
          { expiresIn: '1h' }
        );

        res.status(200).json({ token });
      } catch (error) {
        console.error('Error during Google callback:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    })(req, res, next);
  },
};

module.exports = userController;
