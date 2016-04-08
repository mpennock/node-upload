var express = require('express');
var router = express.Router();
// require multer
var multer = require('multer');

// function for storing setting the file destination and filename
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // set the destination directory
    cb(null, 'uploads/')
  },
  /* 
  set the filename: 
    name of the field in our form (file.fieldname)
    + a randomly generated number from 1 to a billion (Math.floor(Math.random() * 1000000000))
    + the current date in miliseconds (Date.now())
    + the original file name (file.originalname)
    */
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Math.floor(Math.random() * 1000000000) + '-' +  Date.now() + '-' + file.originalname);
  }
})

// variable for calling our storage function
var upload = multer({ storage: storage });

// get handler for our index page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Upload' });
});

// get handler for our index page
router.get('/success', function(req, res, next) {
  res.render('success', { title: 'Success' });
});

// post handler for our upload form
router.post('/', upload.single('upload'), function(req, res){
  // log form fields to the console
  console.log(req.body); //form fields


  // log file info to the console
  console.log(req.file); //form files

  res.redirect('/success');
});

module.exports = router;
