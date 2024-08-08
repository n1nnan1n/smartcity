const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  googleId: { type: String, unique: true, sparse: true },
  facebookId: { type: String, unique: true, sparse: true },
  email: { type: String, unique: true, required: true },
  password: { type: String , required: true},
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  phone: { type: String, required: true },
  emailVerified: { type: Boolean, default: false },
  emailVerificationToken: { type: String },
  emailVerificationExpires: { type: Date },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  role: { type: String, default: 'user' }
},{ timestamps: true, versionKey: false });

userSchema.pre('save', async function () {
    const user = this;
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  });

module.exports = mongoose.model('User', userSchema);