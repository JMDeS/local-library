var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('jmdeseno home page');
})

/* GET users/cool listing */ 
router.get('/about', function(req, res) {
  res.send('This is the about me page');
})

module.exports = router;
