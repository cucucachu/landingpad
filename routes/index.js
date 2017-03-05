var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('upload', { title: 'Express' });
});

router.get('/testvideo', function(req, res, next) {
	res.render('testvideo');
});

module.exports = router;
