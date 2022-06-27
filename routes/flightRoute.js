const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
  .get('/', controller.getFlight)
  .get('/:id', controller.getSingleFlight)
  .post('/', controller.createFlight)
  .put('/:id', controller.updateFlight)
  .delete('/:id', controller.deleteFlight);

module.exports = router;

