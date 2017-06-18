\connect animal_awareness_development

CREATE TABLE stories(
  id BIGSERIAL PRIMARY KEY,
  users varchar(255) NOT NULL,
  content varchar(255) NOT NULL
);

INSERT INTO stories (users, content) VALUES
  ('Mary', 'Hello World'),
  ('Sam', 'Hello World'),
  ('Jacob', 'Hello World'),
  ('Daniel', 'Hello World');  