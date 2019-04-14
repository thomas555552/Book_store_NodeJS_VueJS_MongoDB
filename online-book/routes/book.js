var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* BOOK UPDATE DECREASE PIECE */
router.post('/', function(req, res, next) {
  Book.findOneAndUpdate(
    {
      isbn: req.body.isbn
    },
    {$inc: { piece: -1  }}, function (err,book){
      if(err) throw err;
      if(!book) {
        res.status(401).send({success: false, msg: 'HIBA'});
      } else {
        res.json({success: true, msg: 'Siker'})
      }
    })
});





module.exports = router;
