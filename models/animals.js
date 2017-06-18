console.log('test0');
const db = require('../db/config');
console.log('test1');

const Animals = {};
console.log('test2');


Animals.findAll = () => {
  return db.query(
    `SELECT * FROM animals ORDER BY id ASC`
  );
};

Animals.findById = id => {
  return db.oneOrNone(`SELECT * FROM animals WHERE id = $1` , [id]);
};

Animals.create = animals => {
  console.log(animal);
  return db.one(
    `
      INSERT INTO animals
      (animal_type, animal_pic_url, animal_info)
      VALUES ($1, $2, $3) RETURNING *
    `,
    [Animals.animal_type, animals.animal_pic_url, animals.animal_info]
  );
};

Animals.update = (animals, id) => {
  return db.none(
    `
      UPDATE animals SET
      animal_type = $1,
      animal_pic_url = $2,
      animal_info = $3
      WHERE id = $4
    `,
    [animals.animal_type, animals.animal_pic_url, animals.animal_info, id]
  );
};

Animals.destroy = id => {
  return db.none(
    `
      DELETE FROM animals
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Animals;