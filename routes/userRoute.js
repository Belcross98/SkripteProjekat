const { sequelize, User,Comment } = require('../models');
const express = require('express');
const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/user', (req, res) => {

    User.findAll()
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err));

});

route.get('/user/:id', (req, res) => {

    User.findOne({ where: { id: req.params.id } })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err));

});

route.post('/user', (req, res) => {

    User.create({ Username: req.body.Username, Email: req.body.Email })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err));

});

route.put('/user/:id', (req, res) => {

    User.findOne({ where: { id: req.params.id } })
        .then(usr => {
            usr.Username = req.body.Username;
            usr.Email = req.body.Email;

            usr.save()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err));
        })
        .catch(err => res.status(500).json(err));

});

route.delete('/user/:id', (req, res) => {

    User.findOne({ where: { id: req.params.id } })
        .then(usr => {
            usr.destroy()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err));
        })
        .catch(err => res.status(500).json(err));
});


route.get('/comment', (req, res) => {

    Comment.findAll({ include: ['user'] })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err));

});

route.get('/comment/:id', (req, res) => {

    Comment.findOne({ where: { id: req.params.id }, include: ['user'] })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err));

});

route.post('/comment', (req, res) => {

    Comment.create({ Body: req.body.Body, userId: req.body.userId })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err));

});

route.put('/comment/:id', (req, res) => {

    Comment.findOne({ where: { id: req.params.id }, include: ['user'] })
        .then(msg => {
            msg.Body = req.body.Body;

            msg.save()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err));
        })
        .catch(err => res.status(500).json(err));

});

route.delete('/comment/:id', (req, res) => {

    Comment.findOne({ where: { id: req.params.id }, include: ['user'] })
        .then(msg => {
            msg.destroy()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err));
        })
        .catch(err => res.status(500).json(err));
});

module.exports = route;