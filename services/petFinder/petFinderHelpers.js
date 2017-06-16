// importing isomorphic fetch
require('isomorphic-fetch');
// importing dot env
require('dotenv').config();

//petFinder API 
const PETFINDER_KEY = process.env.PETFINDER_API_KEY;
fetch(`http://api.petfinder.com/pet.get?key=${PETFINDER_KEY}&format=json`)