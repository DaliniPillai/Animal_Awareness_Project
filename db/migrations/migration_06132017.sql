\connect animal_awareness_development

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password TEXT UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS animals (
  id BIGSERIAL PRIMARY KEY,
  animal_type VARCHAR(255),
  animal_pic VARCHAR(255),
  animal_info VARCHAR(255)
  
);

CREATE TABLE IF NOT EXISTS stories (
  id BIGSERIAL PRIMARY KEY,
  users VARCHAR(255),
  animal_id INTEGER REFERENCES animal(id),
  story_title VARCHAR(255),
  story_content VARCHAR(2000)
 

);

