var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req);
  req.pipe(fs.createWriteStream('./public/app.ico'));
  res.send('respond with a resource');
});

module.exports = router;
