const express = require('express');
const {
  homeController,
  randomNumberController,
  fakePersonController,
} = require('./controllers');

const router = express.Router();

router.get('/', homeController);
router.post('/random-number', randomNumberController);
router.post('/fake-person', fakePersonController);

module.exports = router;
