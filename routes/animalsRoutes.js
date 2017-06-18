const express = require('express');
const controller = require('../controllers/animalsController');

const animalsRoutes = express.Router();

animalsRoutes.get('/', controller.index);
animalsRoutes.post('/', controller.create);
animalsRoutes.get('/add', (req, res) => {
  res.render('animals/animals-add', {
    documentTitle: 'Animal Awareness',
  });
});
animalsRoutes.get('/:id', controller.show);
animalsRoutes.put('/:id', controller.update);
animalsRoutes.delete('/:id', controller.destroy);



animalsRoutes.get('/edit/:id', controller.edit);

module.exports = animalsRoutes;