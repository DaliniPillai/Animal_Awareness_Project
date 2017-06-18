\connect animal_awareness_development

-- CREATE TABLE animals(
--   id BIGSERIAL PRIMARY KEY,
--   animal_type varchar(255) NOT NULL,
--   animal_pic_url varchar(255) NOT NULL,
--   animal_info varchar(255) NOT NULL,
--   stories_id INTEGER REFERENCES stories
-- );

INSERT INTO animals (animal_type, animal_pic_url, animal_info, stories_id ) VALUES
  (
    'Cat',
    'https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg', 
    'Cats prefer their food at room temperature—not too hot, not too cold.',
    1
  ),
  (
    'Dog',
    'https://vetstreet.brightspotcdn.com/dims4/default/d742db0/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F98%2Fd98250a0d311e0a2380050568d634f%2Ffile%2FGolden-Retriever-3-645mk062411.jpg',
     'Your dog is as smart as a 2-year-old toddler',
     2
  ),
  (
    'Parrot',
    'https://public-media.smithsonianmag.com/filer/a5/66/a566a5dc-37e7-4b28-8250-49c32b409642/istock_000006766776_large.jpg', 
    'Some parrot species can live for over 80 years',
    3
  ),
  (
    'raccoon',
    'https://images-na.ssl-images-amazon.com/images/I/51E648JIl3L._SX355_.jpg', 
    'Raccoons are nocturnal animals, so they are rarely seen during the day',
    4
    );