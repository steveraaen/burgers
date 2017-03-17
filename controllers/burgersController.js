var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get('/', function(req, res){
  burger.all(function(data){
  var hbsObject ={
    burgers: data
    }
    res.render('index', hbsObject);
  
  })
});

router.put('/burgers/update', function(req,res){
  burger.update(req.body.id, function(result){
    console.log(result);
    res.redirect('/');
  })
});

router.post('/burgers/create', function(req,res){
  burger.create(req.body.burger_name, function(result){
    res.redirect('/');
  })
});

module.exports = router;