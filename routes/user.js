var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');


/* GET SINGLE User BY ID */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET ALL USERS */
router.get('/', function(req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* REGISTRATION USER */
router.post('/register', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



/* LOGIN USER */
router.post('/login', function(req, res, next) {
  User.findOneAndUpdate({
    username: req.body.username,
    password: req.body.password,
  },
    {isLoggedIn: true}, function (err,user){
    if(err) throw err;
    if(!user) {
      res.status(401).send({success: false, msg: 'Error de nombre de usuario o contraseña'});
    } else {
      res.json({success: true, msg: 'Has iniciado sesión correctamente'})
    }
  })
});

/* UPDATE ALL USER WHEN LOGOUT SET isLoggedIn */
router.put('/', function (req,res,next) {
  User.updateMany({},{"$set": {isLoggedIn: false}},(err,result)=>{
    if(err){ throw err}
    res.send('updated');
  });
});

/* UPDATE USER */
router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
