console.log('test0');
const db = require('../db/config');
console.log('test1');

const Animals = {};
console.log('test2');


Animals.findAll = () => {
  console.log('test3');
  return db.query(
    `SELECT animals.id, animals.animal_type, animals.animal_pic_url, animals.animal_info, stories.content, stories.animals_id
    FROM animals
    JOIN stories 
    ON animals.id = stories.animals_id`
  );
};



Animals.findById = (id) => {
  return db.oneOrNone(`SELECT * FROM animals INNER JOIN stories 
  ON animals.id = stories.animals_id WHERE animals.id = $1;` , [id]);
};

console.log('test4');

Animals.create = (animal) => {
  console.log(animal);
   return db.one(
    `
      INSERT INTO animals
      (animal_type, animal_pic_url, animal_info)
      VALUES ($1, $2, $3) RETURNING *;
    `,
    [animal.animal_type, animal.animal_pic_url, animal.animal_info]
  ).then(critter=>{
    console.log('THIS IS THE CRITTER ->>>>',critter)
    db.one(
      `INSERT INTO stories (content, animals_id) 
      VALUES ($1,$2) RETURNING *;`,
      [animal.content, critter.id]
    )
  });
};

console.log('test5');


Animals.update = (animals, id) => {
  return db.none(
    `
      UPDATE animals SET
      animal_type = $1,
      animal_pic_url = $2,
      animal_info = $3,
      content = $4, 
      animals_id = $5,
      WHERE id = $6
    `,
    [animals.animal_type, animals.animal_pic_url, animals.animal_info,stories.content, stories.animals_id, id]
  );
};

Animals.destroy = (id) => {
  return db.none(
    `
      DELETE FROM stories
      WHERE animals_id = $1;
      DELETE FROM animals
      WHERE id = $1;
    `,
    [id]
  );
};

module.exports = Animals;