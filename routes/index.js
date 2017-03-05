var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('upload', { title: 'Express' });
});

router.get('/testvideo', function(req, res, next) {
	res.writeHead(200, {'Content-Type': 'video/mp4'});
	var rs = fs.createReadStream('public/candle.mp4');
	rs.pipe(res);
});

module.exports = router;
