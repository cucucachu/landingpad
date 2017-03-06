var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('upload', { title: 'Express' });
});

router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'Express' });
});

router.get('/watch', function(req, res, next) {
  res.render('watch', { title: 'Express' });
});

router.get('/find', function(req, res, next) {
  res.render('find', { title: 'Express' });
});

router.get('/testvideo', function(req, res, next) {
	res.render('testvideo');
});

module.exports = router;
