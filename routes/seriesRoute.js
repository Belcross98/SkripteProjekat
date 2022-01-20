const { sequelize, Series, Episode } = require('../models');
const express = require('express');
const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/series', (req, res) => {

    Series.findAll()
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err));

});

route.get('/series/:id', (req, res) => {

    Series.findOne({ where: { id: req.params.id } })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err));

});

route.post('/series', (req, res) => {

    Series.create({ Name: req.body.Name, Genre: req.body.Genre, Episodes: req.body.Episodes })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err));

});

route.put('/series/:id', (req, res) => {

    Series.findOne({ where: { id: req.params.id } })
        .then(usr => {
            usr.Name = req.body.Name;
            usr.Genre = req.body.Genre;
            usr.Episodes = req.body.Episodes;

            usr.save()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err));
        })
        .catch(err => res.status(500).json(err));

});

route.delete('/series/:id', (req, res) => {

    Series.findOne({ where: { id: req.params.id } })
        .then(usr => {
            usr.destroy()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err));
        })
        .catch(err => res.status(500).json(err));
});


route.get('/episode', (req, res) => {

    Episode.findAll({ include: ['episode'] })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err));

});

route.get('/episode/:id', (req, res) => {

    Episode.findOne({ where: { id: req.params.id }, include: ['episode'] })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err));

});

route.post('/episode', (req, res) => {

    Series.create({ Name: req.body.Name, EpisodeNumber: req.body.EpisodeNumber, episodeID: req.body.episodeID })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err));

});

route.put('/episode/:id', (req, res) => {

    Episode.findOne({ where: { id: req.params.id }, include: ['episode'] })
        .then(msg => {
            msg.Name = req.body.Name;
            msg.EpisodeNumber = req.body.EpisodeNumber;
            msg.save()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err));
        })
        .catch(err => res.status(500).json(err));

});

route.delete('/episode/:id', (req, res) => {

    Episode.findOne({ where: { id: req.params.id }, include: ['episode'] })
        .then(msg => {
            msg.destroy()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err));
        })
        .catch(err => res.status(500).json(err));
});

module.exports = route;