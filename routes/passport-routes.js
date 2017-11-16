// Requiring our models and passport as we've configured it
var db = require("../models");
var express = require('express');
var passport = require("../config/passport");
var bodyParser = require('body-parser')

var router = express.Router();
var jsonParse = bodyParser.urlencoded({ extended: true });
router.use(jsonParse);


  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  router.post("/api/login", passport.authenticate("local"), function(req, res, err) {
    // if (err) throw err;
    console.log(req.body);
    console.log(req.user);
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/categories");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      dob: req.body.dob,
      uName: req.body.uName,
      //gender: req.body.gender,
      confirmpass: req.body.confirmpass
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  router.get("/api/test", function(res,res) {
    res.json(true);
  })

module.exports = router
