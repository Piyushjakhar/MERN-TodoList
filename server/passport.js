const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "741546714262-b6sr2q2vt39csnlv4dehj97vgqgo8h2g.apps.googleusercontent.com",
      clientSecret: "aWTIz16vPlPM0hz8tYxlm_Oy",
      callbackURL: "/auth/google/redirect",
    },
    function (accessToken, refreshToken, profile, done) {
      // // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      // //   return cb(null, user);
      // // });

      // return done(null,profile);
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          return done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
