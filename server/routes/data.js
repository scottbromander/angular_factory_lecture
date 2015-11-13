var express = require('express');
var router = express.Router();
var people = require('../public/data/people');

router.get('/', function(req, res){
    res.send(people);
});

module.exports = router;