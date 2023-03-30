var express = require('express');
var router = express.Router();


// This is the home page '/'
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Skills Lab' });
});

module.exports = router;
