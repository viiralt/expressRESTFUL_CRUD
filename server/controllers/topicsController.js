const mongoose = require('mongoose');

const Topic = require('../models/Topic');

exports.list = (req, res) => {
  Topic.find()
    .then(topics => {
      res.status(200)
      .send(topics)
    })
}

exports.create = (req, res) => {
  Topic.create({
    title: req.body.title
  })
  .then(topic => 
    res.status(200)
    .send(topic))
}

exports.delete = (req, res) => {
  Topic.deleteOne({_id: req.params.id})
  .then(report => {
    res.status(200);
    res.send(report);
  })
}

exports.vote = (req, res) => {
  const direction = req.params.direction;
  
  if (direction !== 'up' && direction !== 'down' ) res.status(404).send({error: 'Use up or down'});
  
  const value = direction === 'up' ? 1 : -1;
  
  Topic.findOneAndUpdate({ _id: req.params.id }, { $inc: {score: value} }, { new: true })
  .then(topic => {
    res.status(200);
    res.send(topic);
  })
}