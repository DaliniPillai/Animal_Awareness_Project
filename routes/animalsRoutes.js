const express = require('express');
const controller = require('../controllers/animalsController');

const animalsRoutes = express.Router();

animalsRoutes.get('/', controller.index);
animalsRoutes.post('/', controller.create);
animalsRoutes.post('/story/:id', controller.story);
animalsRoutes.get('/add', (req, res) => {
  res.render('animals/animals-add', {
    type: 'add',
    documentTitle: 'Animal Awareness',
  });
});
animalsRoutes.get('/:id', controller.show);
//this runs edit
animalsRoutes.put('/:id', controller.update);
animalsRoutes.delete('/:id', controller.destroy);

//this shows the edit form
animalsRoutes.get('/edit/:id', controller.edit);


module.exports = animalsRoutes;