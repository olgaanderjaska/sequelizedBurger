var express = require("express");
var burger = require('./../models/burger.js');

var router = express.Router();

router.get('/', (req, res) => {
    burger.all((data) => {
        console.log(data);
        res.render('index', { 'burgers': data });
    });
});

router.post('/', (req, res) => {
    console.log('data to add', req.body);
    burger.createBurger(req.body, (data) => {
        res.redirect('/');
    })
});

router.put('/:id', (req, res) => {
    var burgId = req.params.id;
    console.log('data to update', req.body);
    burger.updateBurger(burgId, (data) => {
        res.redirect('/');
    });
});

module.exports = router;
