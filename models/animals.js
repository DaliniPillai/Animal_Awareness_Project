console.log('test0');
const db = require('../db/config');
console.log('test1');

const Animals = {};
console.log('test2');


Animals.findAll = () => {
  console.log('test3');
  return db.query(
    `SELECT animals.id, animals.animal_type, animals.animal_pic_url, animals.animal_info, stories.content
    FROM animals
    JOIN stories 
    ON animals.stories_id = stories.id`
  );
};



Animals.findById = (id) => {
  return db.oneOrNone(`SELECT * FROM animals INNER JOIN stories 
  ON animals.stories_id = stories.id WHERE animals.id = $1;` , [id]);
};

console.log('test4');

Animals.create = (animals) => {
  console.log(animals);
  return db.one(
    `
      INSERT INTO animals
      (animal_type, animal_pic_url, animal_info)
      VALUES ($1, $2, $3) RETURNING *
    `,
    [animals.animal_type, animals.animal_pic_url, animals.animal_info]
  );
};

console.log('test5');


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

Animals.destroy = (id) => {
  return db.none(
    `
      DELETE FROM animals
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Animals;