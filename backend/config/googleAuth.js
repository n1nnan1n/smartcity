const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  // clientID: process.env.GOOGLE_CLIENT_ID,
  clientID: "176530666181-n4k3q23104370qt4epd16eag0h036u58.apps.googleusercontent.com",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  // Logic to find or create a user in your database
}));