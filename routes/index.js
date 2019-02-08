var express = require('express');
var router = express.Router();
var mailController = require('../controllers/mailController');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
// });
router.get('/',mailController.mailerMod.sendMail);
module.exports = router;
