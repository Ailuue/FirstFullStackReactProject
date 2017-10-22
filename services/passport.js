const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2');
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy({
    clientID: keys.GoogleClientID,
    clientSecret: keys.GoogleClientSecret,
    callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if (existingUser) {
          // already have record
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id }).save()
          .save()
          .then(user => done(null, user));
        }
      })
    }
      
    
  )
);
