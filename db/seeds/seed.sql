-- DROP DATABASE IF EXISTS animal_awareness_development;
-- CREATE DATABASE animal_awareness_development;

\connect animal_awareness_development;

\i ./db/seeds/animals.sql;
\i ./db/seeds/stories.sql;




