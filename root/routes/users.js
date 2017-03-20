var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/userSchema');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('UserHome');
});

router.get('/signup',function(req,res,next){
  res.render("signup");
});

router.post('/signup', function(req,res,next){
  User.createUser(new User({
    local:{
      email: req.body.email,
      username : req.body.username,
      password : req.body.password,
      created_at:new Date(),
      updated_at:new Date()
    }
  }));
  // passport.authenticate('local', {
  //   successRedirect: '/',
  //   failureRedirect: '/users/login',
  //   failureFlash: true
  // });
});


router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/users/login',
                                   failureFlash: true }));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});



module.exports = router;
