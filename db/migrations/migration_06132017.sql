\connect animal_awareness_development

DROP TABLE animals;

CREATE TABLE animals (
  id BIGSERIAL PRIMARY KEY,
  animal_type VARCHAR(255),
  animal_pic_url VARCHAR(255),
  animal_info VARCHAR(255)
);


DROP TABLE stories;

CREATE TABLE stories (
  id BIGSERIAL PRIMARY KEY,
  users VARCHAR(255),
  animals_id INTEGER REFERENCES animals(id),
  story_title VARCHAR(255),
  story_content TEXT
);

