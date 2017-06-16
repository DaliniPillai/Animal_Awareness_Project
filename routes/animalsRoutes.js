const express = require('express');
const controller = require('../controllers/animalsController');

const animalsRoutes = express.Router();


animalsRoutes.get('/:id', controller.show);




module.exports = animalsRoutes;