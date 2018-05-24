const express = require('express');
const router = express.Router();

const topicsController = require('../controllers/topicsController');
const { catchErrors } = require('../handlers/errorHandler');
const Topic = require('../models/Topic');

router
  .get('/topics', catchErrors(topicsController.list))
  .post('/topics', catchErrors(topicsController.create))
  .delete('/topics/:id', catchErrors(topicsController.delete))
  .put('/topics/:id/:direction', topicsController.vote)

module.exports = router;  

