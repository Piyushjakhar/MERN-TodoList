const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const app = express();
const PORT = 5000;
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./models/User");
require("./passport");

app.use(cors());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ["AnyRandomStringHere"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

 mongoose.connect(
  "mongodb://dbUser:dbUserPassword@cluster0-shard-00-00.8ow58.mongodb.net:27017,cluster0-shard-00-01.8ow58.mongodb.net:27017,cluster0-shard-00-02.8ow58.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-aix88j-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

app.get("/success", (req, res) => {
  res.send("Ho gya login!!");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);


app.get(
  "/auth/google/redirect",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/user");
  }
);

app.listen(PORT, () => {
  console.log("Login server is up and running!!");
});
