const express = require('express');
const controller = require('../controllers/storiesController');

const storiesRoutes = express.Router();

storiesRoutes.get('/', controller.index);
storiesRoutes.post('/', controller.create);
storiesRoutes.get('/add', (req, res) => {
  res.render('stories/stories-add', {
    documentTitle: 'Animal Awareness',
  });
});
storiesRoutes.get('/:id', controller.show);
storiesRoutes.put('/:id', controller.update);
storiesRoutes.delete('/:id', controller.destroy);



storiesRoutes.get('/edit/:id', controller.edit);

module.exports = storiesRoutes;