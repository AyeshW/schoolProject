var express = require('express');
var router = express.Router();
var $ = require("jquery");
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;

global.testVary = "asdfa";
//GLOBAL.document = new JSDOM(html).window.document;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
