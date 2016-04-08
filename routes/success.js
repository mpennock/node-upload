var express = require('express');
var router = express.Router();

// get handler for our index page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Success' });
});


module.exports = router;
