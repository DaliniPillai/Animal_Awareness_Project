const Animals = require('../models/animals');
console.log(Animals);
const animalsController = {};

animalsController.index = (req, res) => {
  Animals.findAll()
    .then(animals => {
      console.log(animals);
      res.render('animals/animals-index', {
        documentTitle: 'Animal Awareness',
        animalsData: animals,
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

animalsController.show = (req, res) => {
  Animals.findById(req.params.id)
  .then(animals => {
    console.log(animals);
    res.render('animals/animals-single', {
      documentTitle: 'Animal Awareness',
      animals: animals,
    });
  })
   .catch(err => {
      res.status(400).json(err);
    });
};

animalsController.create = (req, res) => {
  console.log('This is me trying to save shit--->',req.body);
  Animals.create({
    animal_type: req.body.animal_type,
    animal_pic_url: req.body.animal_pic_url,
    animal_info: req.body.animal_info,
  })
  .then(animal => {
    console.log(animal);
    res.redirect('/animals');
  })
  .catch(err => {
    res.status(400).json(err);
  });
};



animalsController.edit = (req,res) => {
  Animals.findById(req.params.id)
  .then(animals => {
    console.log(animals);
    res.render('animals/animals-add', {
      documentTitle: 'Animal Awareness',
      animals: animals,
      type: 'edit',
      id: req.params.id,
    });
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

animalsController.update = (req, res) => {
  Animals.update({
    animal_type: req.body.animal_type,
    animal_pic_url: req.body.animal_pic_url,
    animal_info: req.body.animal_info,
  }, req.params.id)
  .then(animals => {
    res.redirect('/animals');
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

animalsController.destroy = (req, res) => {
  Animals.destroy(req.params.id)
  .then(() =>{
    res.redirect('/animals');
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

module.exports = animalsController;