var express = require('express');
var router = express.Router();
var multer = require('multer'), bodyParser = require('body-parser'), path = require('path');

var app = new express();

app.use(bodyParser.json());

// Get handler for upload page
router.get('/', function(req, res, next) {
  res.render('upload', { title: 'upload' });
});

// POST handler for our upload form
app.post('/', multer({ dest: './uploads/'}).single('upl'), function(req,res){
	console.log(req.body); //form fields
	/* example output:
	{ title: 'abc' }
	 */
	console.log(req.file); //form files
	/* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
	 */
	res.status(204).end();
});

module.exports = router;
